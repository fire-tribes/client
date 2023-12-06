import { EditStockInfoUI } from './styles';
import AlertModal from '@/components/common/Modal/AlertModal';
import trashSvg from '@/public/icon/trash.svg';
import belowArrowSvg from '@/public/icon/below_arrow.svg';
import { basic } from '@/styles/palette';
import { useGetCurrentPriceInAssetDetails } from '@/hook/useGetCurrentPriceInAssetDetails';
import useDeleteAssetDetails from '@/hook/useDeleteAssetDetails';
import { ResponseSuccess } from '@/@types/models/response';
import { MyPortfolioModel } from '@/@types/models/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useGetAssetDetail } from '@/hook/useGetAssetDetail';
import StockAvatar from '@/components/common/StockAvatar';
import CurrencyTypeChoiceBottomSheetModal from '@/components/commonV2/ModalV2/CurrencyTypeChoiceBottomSheetModal';
import { editAssetDetailAtom } from '@/hook/useEditAssetDetail/state';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import {
  checkDecimalPointLength,
  handleDecimalPoint,
} from '@/core/utils/handleNumber';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { changeIsPressButtonInEditAtom } from '@/hook/useChangeIsPressButtonInEdit/state';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';

interface EditStockInfoProps {
  slug: string[];
}

export default function EditStockInfo({ slug }: EditStockInfoProps) {
  /** 3. '정보 확인' API로 수량 및 가격 데이터 가져오기(GET) */
  /** COMPLETED: 3-1. GET 요청에 필요한 portfolioId와 portfolioAssetId 가져오기 */
  const portfolioId = Number(slug?.[0]);
  const assetId = Number(slug?.[1]);
  const portfolioAssetId = Number(slug?.[2]);
  // const currencyType = slug?.[3];

  const [editAssetDetail, setEditAssetDetail] = useAtom(editAssetDetailAtom);

  /** 3-1. Cache에 있는 환율 정보 가져오기(GET) */
  const { exchangeRate } = useExchangeRate();
  const EXCHANGE_RATE = exchangeRate;

  /** COMPLETED: 3-2. useFeatureHook으로 '정보 확인' API 데이터 가져오기 */
  const { getAssetDetailData } = useGetAssetDetail(
    portfolioId,
    portfolioAssetId,
  );
  const assetDetailData = getAssetDetailData?.data;
  useEffect(() => {
    // useEffect로 객체의 상태 업데이트 이후 동작 수행
    if (assetDetailData) {
      setEditAssetDetail((prev) => ({ ...prev, ...assetDetailData }));
    }
  }, [assetDetailData, setEditAssetDetail]);

  /** 4. 수량 및 가격 데이터를 수정하기 */
  /** COMPLETED: 4-1. count, price 데이터 직접 변경하기 */
  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (!assetDetailData) return;

    const { value } = e.target;

    if (checkDecimalPointLength(value) > 2) return;

    setEditAssetDetail((prev) => ({
      ...prev,
      count: value,
    }));
  };
  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (!assetDetailData) return;
    const { value } = e.target;

    if (checkDecimalPointLength(value) > 2) return;

    setEditAssetDetail((prev) => ({
      ...prev,
      purchasePrice: value,
    }));
  };
  /** COMPLETED: 4-2. newCurrencyType 달러 또는 원화로 변경하기  */
  const handleCurrencyType = (newCurrencyType: ExchangeRateSymbol) => {
    setEditAssetDetail((prev) => {
      let newPurchasePrice = prev.purchasePrice;
      console.log('newPurchasePrice: ', newPurchasePrice);
      if (newCurrencyType === 'USD' && EXCHANGE_RATE !== undefined) {
        newPurchasePrice = handleDecimalPoint(
          Math.floor,
          Number(newPurchasePrice) / EXCHANGE_RATE,
          2,
        );
      } else if (newCurrencyType === 'KRW' && EXCHANGE_RATE !== undefined) {
        newPurchasePrice = handleDecimalPoint(
          Math.floor,
          Number(newPurchasePrice) * EXCHANGE_RATE,
          0,
        );
      }

      return {
        ...prev,
        purchasePrice: newPurchasePrice,
        currencyType: newCurrencyType,
      };
    });
    return;
  };
  /** COMPLETED: 4-3. '현재가 입력' 버튼으로 price 데이터 변경하기 */
  const [isPressButtonInEdit, setIsPressButtonInEdit] = useAtom(
    changeIsPressButtonInEditAtom,
  );
  const { getCurrentPriceData, invalidateCurrentPrice } =
    useGetCurrentPriceInAssetDetails(
      assetId,
      editAssetDetail.currencyType,
      isPressButtonInEdit,
    );
  const handleCurrentPrice = (
    assetId: number,
    currencyType: ExchangeRateSymbol,
  ) => {
    setIsPressButtonInEdit(true);
    const result = getCurrentPriceData?.data;
    if (result) {
      invalidateCurrentPrice(assetId, currencyType);
      return;
    }
  };
  /** COMPLETED: 4-4. count, price 데이터를 입력하지 않을 때, Error 처리하기 */
  const [errorText, setErrorText] = useState('');
  const handleInputBlur = () => {
    if (!assetDetailData) return;

    if (
      /** 4-3-1. 수량 및 가격이 ''일 떄, Error 처리하기 */
      !assetDetailData.count ||
      !assetDetailData.purchasePrice
    ) {
      setErrorText('* 보유 수량 및 가격을 정확히 입력해주세요.');
    } else if (
      /** 4-3-2. 수량 및 가격이 음수일 때 Error 처리하기 */
      parseInt(assetDetailData.count.toString(), 10) <= 0 ||
      parseFloat(assetDetailData.purchasePrice.toString()) <= 0
    ) {
      setErrorText('* 보유 수량 및 가격은 0보다 값이 커야 합니다.');
    } else {
      /** 4-3-3. 수량 및 가격이 제대로 입력되었을 때, Error 문구 초기화 */
      setErrorText('');
    }
  };

  /** COMPLETED: 5-1. 해당 주식 삭제하기 */
  const { deleteAssetDetailsData } = useDeleteAssetDetails();
  const queryClient = useQueryClient();
  const handleRemoveSelected = () => {
    /** 5-1-1. Cache에 해당 주식 객체 삭제하기 */
    const updater = () => {
      const myPortfolioDataForEdit:
        | AxiosResponse<ResponseSuccess<MyPortfolioModel>>
        | undefined = queryClient.getQueryData(queryKeys.myPortFolio());

      if (myPortfolioDataForEdit) {
        const assetDetails = myPortfolioDataForEdit.data.data.assetDetails;
        if (assetDetails) {
          /** 5-1-2. Cache 내 portfolioAssetId가 일치하지 않는 객체만 필터링하기
           * (일치한 값을 찾아서 해당 주식 객체 삭제하기)
           */
          const newAssetDetails = assetDetails?.filter(
            (assetDetail) =>
              assetDetail.portfolioAssetId !==
              assetDetailData?.portfolioAssetId,
          );
          myPortfolioDataForEdit.data.data.assetDetails = newAssetDetails;
        }
      }
      return myPortfolioDataForEdit;
    };
    /** 5-1-3. 수정된 데이터로 Cache 업데이트하기 */
    queryClient.setQueryData(queryKeys.myPortFolio(), () => updater());
    /** 5-2. 서버 내 해당 주식 객체 삭제하기 */
    deleteAssetDetailsData({
      portfolioId,
      portfolioAssetId,
    });
  };

  return (
    <>
      <EditStockInfoUI.Container>
        <EditStockInfoUI.Item>
          <EditStockInfoUI.TopContainer>
            <EditStockInfoUI.NativeStockInfoContainer>
              <StockAvatar
                primary={editAssetDetail.tickerCode}
                secondary={editAssetDetail.stockCode}
              />
              <div>
                <div>{editAssetDetail.name}</div>
                <div>
                  {editAssetDetail.tickerCode
                    ? editAssetDetail.tickerCode
                    : editAssetDetail.stockCode}
                </div>
              </div>
            </EditStockInfoUI.NativeStockInfoContainer>
            <AlertModal
              title={'종목 삭제'}
              message={'이 종목을 정말 삭제하시겠어요?'}
              onClickEvent={() => handleRemoveSelected()}
            >
              <EditStockInfoUI.ButtonContainer>
                <Image src={trashSvg} alt="trash Svg" />
                <button style={{ color: `${basic.gray6}`, fontWeight: 500 }}>
                  삭제
                </button>
              </EditStockInfoUI.ButtonContainer>
            </AlertModal>
          </EditStockInfoUI.TopContainer>
          <EditStockInfoUI.BottomContainer>
            <div>
              <input
                type="number"
                value={editAssetDetail.count}
                placeholder="보유 수량"
                onChange={handleChangeCount}
                onBlur={handleInputBlur}
              />
            </div>
            <div>
              <CurrencyTypeChoiceBottomSheetModal
                changeCurrencyType={editAssetDetail.currencyType}
                handleCurrencyType={handleCurrencyType}
              >
                <EditStockInfoUI.CurrencyChangeButton>
                  <span>
                    {editAssetDetail.currencyType === 'KRW' ? '원화' : '달러'}
                  </span>
                  <Image src={belowArrowSvg} alt="belowArrow Svg" />
                </EditStockInfoUI.CurrencyChangeButton>
              </CurrencyTypeChoiceBottomSheetModal>
              <div>{editAssetDetail.currencyType === 'KRW' ? '₩' : '$'}</div>
              <input
                type="number"
                value={editAssetDetail.purchasePrice}
                placeholder="구매 가격"
                onChange={handleChangePrice}
                onBlur={handleInputBlur}
              />
              <button
                style={{ color: `${basic.point_blue02}`, fontWeight: 500 }}
                onClick={() =>
                  handleCurrentPrice(assetId, editAssetDetail.currencyType)
                }
              >
                현재가 입력
              </button>
            </div>
          </EditStockInfoUI.BottomContainer>
          {errorText && (
            <EditStockInfoUI.ErrorContainer>
              {errorText}
            </EditStockInfoUI.ErrorContainer>
          )}
        </EditStockInfoUI.Item>
      </EditStockInfoUI.Container>
    </>
  );
}
