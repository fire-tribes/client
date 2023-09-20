// import { FeedStockInfosUI } from './style';
import FeedStockInfo from '../FeedStockInfo';
import CommonButton from '../common/Button/CommonButton';
import useGetPresentPriceAll from '@/hook/useGetPresentPriceAll';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import CheckSvg from '@/public/icon/check.svg';
import { basic } from '@/styles/palette';
import APIInstance from '@/core/api/instance';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import Image from 'next/image';

export interface PresentPrice {
  success: true;
  data: [
    {
      assetId: number;
      currentPrice: string;
      currencyType: string;
      accessTime: '2023-09-14T06:03:13.450Z';
      sign: string;
      priceChange: string;
      priceChangeRate: string;
    },
  ];
  errorCode: string;
  message: string;
}

const useGetPresentPrice = (assetIds: number) => {
  return useQuery({
    queryKey: ['presentPrice', assetIds],
    queryFn: () =>
      APIInstance.get<PresentPrice>('asset/price', {
        params: {
          assetIds: assetIds,
        },
      }),
    onError: (error) => console.log(error), // TODO: Toast로 확장 사용
    onSuccess: (response) => console.log(response), // TODO: Toast로 확장 사용
  });
};

function FeedStockInfos() {
  /** Jotai의 selectedStocksAtom을 이용해서 선택된 주식을 관리 */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);
  // console.log('selectedStocks: ', selectedStocks);

  /** [삭제 함수] Jotai로 만든 주식 종목 배열에서 해당 객체 삭제하는 함수 */
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) =>
      prev.filter(
        (selected: SelectedStocksAtomProps) =>
          selected.stockCode !== stock.stockCode,
      ),
    );
  };

  /** 현재가 전체 자동 입력 함수 */
  // const handleClickPresentPriceButton = (id) => {
  //   const dataArray = getPresentPrice.data?.data.data;
  //   if (dataArray !== undefined) {
  //     setInputPriceValue(dataArray[id].currentPrice);
  //     // 오류 메시지 초기화
  //     setError('');
  //   }
  // };

  // selectedStocks.map((stock) => {
  //   const getPresentPrice = useGetPresentPrice(stock.assetId);
  // });
  // const [inputPriceValues, setInputPriceValues] = useState([]);
  // const handleClickPresentPriceButtonAll = () => {
  //   const newInputValues = getPresentPrice.data?.data.map(
  //     (stock) => stock.currentPrice,
  //   );
  //   console.log('newInputValues: ', newInputValues);
  //   setInputPriceValues(newInputValues);
  // };
  useGetPresentPrice(123123);

  /** assetId로 서버에 get 요청하여 개별적으로 받아온 presentPrice가 담긴 배열 */
  const { callStart } = useGetPresentPriceAll();

  return (
    <>
      <div style={{ marginBottom: '26px' }}>
        <CommonButton
          style={{
            padding: '8px 10px',
            borderRadius: '20px',
            backgroundColor: `${basic.gray1}`,
            color: `${basic.point_blue02}`,
          }}
          onClick={callStart}
        >
          <Image src={CheckSvg} alt="check Svg" />
          <span style={{ marginLeft: '6px', fontWeight: 700 }}>
            현재가 전체 자동 입력
          </span>
        </CommonButton>
      </div>
      <div>
        {selectedStocks.map((stock) => {
          return (
            <FeedStockInfo
              key={stock.assetId}
              stock={stock}
              removeSelected={handleRemoveSelected}
              // onClickPresentPriceButton={() =>
              //   handleClickPresentPriceButton(id)
              // }
            />
          );
        })}
      </div>
    </>
  );
}

export default FeedStockInfos;
