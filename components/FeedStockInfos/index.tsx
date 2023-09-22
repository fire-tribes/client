// import { FeedStockInfosUI } from './style';
import FeedStockInfo from '../FeedStockInfo';
import CommonButton from '../common/Button/CommonButton';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import CheckSvg from '@/public/icon/check.svg';
import { basic } from '@/styles/palette';
import { useGetPresentPrice } from '@/hook/useGetPresentPrice';
import { useAtom } from 'jotai';
import Image from 'next/image';

// export interface PresentPrice {
//   success: true;
//   data: [
//     {
//       assetId: number;
//       currentPrice: string;
//       currencyType: string;
//       accessTime: string;
//       sign: string;
//       priceChange: string;
//       priceChangeRate: string;
//     },
//   ];
//   errorCode: string;
//   message: string;
// }

// const useGetPresentPrice = (assetIds: number) => {
//   return useQuery({
//     queryKey: ['presentPrice', assetIds],
//     queryFn: () =>
//       APIInstance.get<PresentPrice>('asset/price', {
//         params: {
//           assetIds: assetIds,
//         },
//       }),
//     onError: (error) => console.log(error), // TODO: Toast로 확장 사용
//     onSuccess: (response) => console.log(response), // TODO: Toast로 확장 사용
//   });
// };

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

  /** 현재가 자동 입력 함수 */
  const exampleAssetIds = 1;
  const { getPresentPriceData } = useGetPresentPrice(exampleAssetIds);
  const presentPrice =
    getPresentPriceData !== undefined && getPresentPriceData[0].currentPrice;
  console.log('presentPrice: ', presentPrice);

  /** TODO: 현재가 자동 입력 함수를 모든 Input에 적용 (현재가 전체 자동 입력 함수) */

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
            />
          );
        })}
      </div>
    </>
  );
}

export default FeedStockInfos;
