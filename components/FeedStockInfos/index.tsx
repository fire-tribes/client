// import { FeedStockInfosUI } from './style';
import FeedStockInfo from '../FeedStockInfo';
import CommonButton from '../common/Button/CommonButton';
import useGetPresentPriceAll from '@/hook/useGetPresentPriceAll';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useAtom/state';
import CheckSvg from '@/public/icon/check.svg';
import { basic } from '@/styles/palette';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
      axios.get<PresentPrice>('http://project-snow.kro.kr/api/v1/asset/price', {
        params: {
          assetIds: assetIds,
        },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJna3N3bjQ1QG5hdmVyLmNvbSIsInVzZXJJZCI6MiwiZW1haWwiOiJna3N3bjQ1QG5hdmVyLmNvbSIsImV4cCI6MTY5NTEzMTIwOH0._acTIC5hMaZXs1oYiWOYAJBxhllXMndkrE_0lgNVHPaCKoaxIXQ-TB1kpGu3vE9B_EK085bfANhZ69YiLFELqA',
        },
      }),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};

function FeedStockInfos() {
  // Jotai의 selectedStocksAtom을 이용해서 선택된 주식을 관리
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);
  // console.log('selectedStocks: ', selectedStocks);
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) =>
      prev.filter(
        (selected: SelectedStocksAtomProps) =>
          selected.stockCode !== stock.stockCode,
      ),
    );
  };

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
  // assetId로 서버에 get 요청하여 개별적으로 받아온 presentPrice가 담긴 배열
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

// const handleClickPresentPriceButtonForAll = (
//   selectedStocks: SelectedStocksAtomProps[],
// ) => {
//   selectedStocks.forEach((id) => {
//     // 각 자식 컴포넌트의 버튼에 이벤트를 실행
//     handleClickPresentPriceButton(id);
//   });
// };

export default FeedStockInfos;
