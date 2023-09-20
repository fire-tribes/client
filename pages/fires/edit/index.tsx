import Backward from '@/components/Backward';
// import EditStocks from '@/components/EditStocks';
import NothingStocks from '@/components/NothingStocks';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import APIInstance from '@/core/api/instance';
// import { portfolioListAtom } from '@/hook/useGetPortfolioList/state';
import { useQuery } from '@tanstack/react-query';
// import { useAtom } from 'jotai';

export interface portfolioList {
  success: boolean;
  data: {
    portfolioId: number;
    totalValue: number;
    totalValueChange: number;
    totalValueChangeRate: number;
    assetDetails: [
      {
        assetId: number;
        tickerCode: string;
        stockCode: string;
        count: number;
        averagePrice: string;
        currentPrice: string;
        assetPriceChangeRate: string;
        assetPriceChange: string;
        value: number;
        rateOfReturn: number;
        dividendPriceRatio: number;
        dividendMonth: number[];
        currencyType: 'KRW';
      },
    ];
  };
  errorCode: string;
  message: string;
}

const useGetPortfolioList = () => {
  return useQuery({
    queryKey: ['portfolioList'],
    queryFn: () => APIInstance.get<portfolioList>('portfolio'),
    onError: (error) => console.log(error),
    onSuccess: (response) => console.log(response),
  });
};

function Edit() {
  // 검색 결과 데이터
  // const getPortfolioList = {
  //   success: true,
  //   data: {
  //     portfolioId: 0,
  //     totalValue: 0,
  //     totalValueChange: 0,
  //     totalValueChangeRate: 0,
  //     assetDetails: [
  //       {
  //         assetId: 0,
  //         tickerCode: 'string',
  //         stockCode: 'string',
  //         count: 0,
  //         averagePrice: 'string',
  //         currentPrice: 'string',
  //         assetPriceChangeRate: 'string',
  //         assetPriceChange: 'string',
  //         value: 0,
  //         rateOfReturn: 0,
  //         dividendPriceRatio: 0,
  //         dividendMonth: [0],
  //         currencyType: 'KRW',
  //       },
  //       {
  //         assetId: 1,
  //         tickerCode: 'string',
  //         stockCode: 'string',
  //         count: 0,
  //         averagePrice: 'string',
  //         currentPrice: 'string',
  //         assetPriceChangeRate: 'string',
  //         assetPriceChange: 'string',
  //         value: 0,
  //         rateOfReturn: 0,
  //         dividendPriceRatio: 0,
  //         dividendMonth: [0],
  //         currencyType: 'KRW',
  //       },
  //     ],
  //   },
  //   errorCode: 'string',
  //   message: 'string',
  // };

  const getPortfolioList = useGetPortfolioList();
  // console.log(getPortfolioList.data?.data.data.assetDetails);

  // const [portfolioList, setPortfolioList] = useAtom(portfolioListAtom);
  // setPortfolioList(getPortfolioList.data?.data.data.assetDetails);

  return (
    <SearchLayout
      isDisabled={false}
      buttonName={'완료'}
      isSearchActive={!getPortfolioList ? true : false}
    >
      <section>
        <Backward title={'보유 주식 편집'} />
      </section>
      <section>
        {getPortfolioList.data !== undefined &&
        getPortfolioList?.data.data.data.portfolioId !== 0 ? (
          // <EditStocks portfolioList={getPortfolioList} />
          <div>{getPortfolioList?.data.data.data.portfolioId}</div>
        ) : (
          <NothingStocks />
        )}
      </section>
    </SearchLayout>
  );
}

export default Edit;
