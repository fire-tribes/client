import { EditStockInfoUI } from './styles';
import AlertModal from '@/components/common/Modal/AlertModal';
import testCircleSvg from '@/public/icon/testCircle.svg';
import trashSvg from '@/public/icon/trash.svg';
import { basic } from '@/styles/palette';
import { assetDetailsAtom } from '@/hook/useGetAssetDetails/state';
import { useGetCurrentPriceInAssetDetails } from '@/hook/useGetCurrentPriceInAssetDetails';
import { editedAssetDetailsAtom } from '@/hook/useEditedAssetDetails/state';
import useDeleteAssetDetails from '@/hook/useDeleteAssetDetails';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

// interface EditStockInfoProps {
//   /** 선택한 배열의 객체값 */
//   // stock: assetDetailsAtomProps | undefined;
//   /** 선택한 값을 배열 삭제 */
//   // removeSelected: () => void;
//   /** 현재가 입력 버튼 */
//   // currentPriceButton: () => void;
//   /** 가격 input */
//   // inputCountValue: string;
//   /** 가격 input */
//   // inputPriceValue: string;
//   /** 수량이 변화했을 때, 발생하는 Event */
//   // changeCountEventHandle: (e: ChangeEvent<HTMLInputElement>) => void;
//   /** 가격이 변화했을 때, 발생하는 Event */
//   // changePriceEventHandle: (e: ChangeEvent<HTMLInputElement>) => void;
//   /** handleCurrentPriceButton */
//   // handleCurrentPriceButton: () => void;
// }

export default function EditStockInfo() {
  /** 전체 편집 페이지에서 받아온 개별 종목 assetId */
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };

  const assetId = Number(slug?.[1]);
  const portfolioAssetId = Number(slug?.[2]);
  /** 만들어진 Jotai(assetDetails)에서 값 가져오기 */
  const [assetDetails, setAssetDetails] = useAtom(assetDetailsAtom);
  console.log('assetDetails: ', assetDetails);
  const [editedAssetDetails, setEditedAssetDetails] = useAtom(
    editedAssetDetailsAtom,
  );

  /** 1. AssetId의 value가 router.query로 받은 id이므로 assetId로 index를 찾는다. */
  const filterAssetDetail = (portfolioAssetId: number) => {
    const assetDetailsArray = assetDetails;
    if (assetDetailsArray !== undefined) {
      return assetDetailsArray.filter((assetDetail) => {
        return assetDetail.portfolioAssetId === portfolioAssetId;
      })[0];
    }
  };
  const object = filterAssetDetail(portfolioAssetId);
  console.log('object: ', object);

  useEffect(() => {
    if (object?.count && object?.averagePrice) {
      setEditedAssetDetails((prev) => ({
        ...prev,
        assetId: assetId,
        count: object.count,
        price: object.averagePrice,
      }));
    }
  }, [object]);
  /** count 값 직접 변경 함수 */
  const changeCountEventHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedAssetDetails((prev) => ({
      ...prev,
      count: Number(value),
    }));
    // console.log('assetDetails[index!].count: ', assetDetails[index!].count);
    // setInputCountValue(value);
  };

  /** price 값 직접 변경 함수  */
  const changePriceEventHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedAssetDetails((prev) => ({
      ...prev,
      assetId: assetId,
      price: Number(value),
    }));
    // console.log(
    //   'assetDetails[index!].averagePrice: ',
    //   assetDetails[index!].averagePrice,
    // );
    // setInputPriceValue(value);
  };

  /** 값을 입력하지 않았을 때, 발생시킬 Error 함수 */
  const [errorText, setErrorText] = useState('');
  const handleInputBlur = () => {
    if (!editedAssetDetails.count || !editedAssetDetails.price) {
      setErrorText('* 보유 수량 및 가격을 정확히 입력해주세요.');
    } else {
      setErrorText('');
    }
  };

  /** 현재가 개별 버튼 함수 */
  const [isPressButton, setIsPressButton] = useState(false);
  const { invalidateCurrentPrice } = useGetCurrentPriceInAssetDetails(
    assetId,
    isPressButton,
  );

  const handleCurrentPriceButton = (assetId: number) => {
    invalidateCurrentPrice(assetId);
    setIsPressButton(true);
    // const currentPrice = getCurrentPriceDatas?.data[0]?.currentPrice;
    // if (currentPrice !== undefined) {
    //   setEditedAssetDetails((prev) => ({
    //     ...prev,
    //     assetId: assetId,
    //     price: currentPrice,
    //   }));
    // }
  };

  /** [삭제 함수] Jotai로 만든 주식 종목 배열에서 해당 객체 삭제하는 함수 */
  const { deleteAssetDetailsData } = useDeleteAssetDetails();
  const { myPortFolioData } = useMyPortFolio();
  const handleRemoveSelected = () => {
    const requestObject = {
      portfolioId:
        myPortFolioData !== undefined ? myPortFolioData.portfolioId : 0,
      portfolioAssetId: object !== undefined ? object.portfolioAssetId : 0,
    };
    setAssetDetails((prev) =>
      prev.filter(
        (assetDetail) =>
          assetDetail.portfolioAssetId !== object?.portfolioAssetId,
      ),
    );
    deleteAssetDetailsData(requestObject);
  };

  return (
    <>
      <EditStockInfoUI.Container>
        <EditStockInfoUI.Item>
          <EditStockInfoUI.TopContainer>
            <EditStockInfoUI.NativeStockInfoContainer>
              <div>
                <div>{object?.tickerCode.split('')[0]}</div>
                <Image src={testCircleSvg} alt="testCircle Svg" />
              </div>
              <div>
                <div>{object?.tickerCode}</div>
                <div>
                  {object?.tickerCode}
                  {/* ? assetDetails[ASSET_ID].tickerCode
                    : assetDetails[ASSET_ID].stockCode */}
                </div>
              </div>
            </EditStockInfoUI.NativeStockInfoContainer>
            <AlertModal
              title={'종목 삭제'}
              message={'이 종목을 정말 삭제하시겠어요?'}
              onClickEvent={() => handleRemoveSelected()}
              isShowToast={false}
              toastMessage={'종목을 삭제하였습니다.'}
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
                type="text"
                value={editedAssetDetails.count || ''}
                placeholder="보유 수량"
                onChange={changeCountEventHandle}
                onBlur={handleInputBlur}
              />
            </div>
            <div>
              <input
                type="text"
                value={editedAssetDetails.price || ''}
                placeholder="구매 가격($)"
                onChange={changePriceEventHandle}
                onBlur={handleInputBlur}
              />
              <button
                style={{ color: `${basic.point_blue02}`, fontWeight: 500 }}
                onClick={() => handleCurrentPriceButton(assetId)}
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
