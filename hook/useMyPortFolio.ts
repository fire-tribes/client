import { MyPortfolioModel } from '@/@types/models/portfolio';
import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
// import { useRouter } from 'next/router';
// import { useCallback, useEffect } from 'react';

const mockMyPortFolioData: MyPortfolioModel = {
  portfolioId: 2,
  totalValue: 200,
  totalValueChange: 100,
  totalValueChangeRate: 50,
  assetDetails: [
    {
      assetId: 20,
      tickerCode: 'APPLE',
      stockCode: '',
      count: 5,
      averagePrice: '20',
      currentPrice: '50',
      assetPriceChange: '100',
      assetPriceChangeRate: '100%',
      value: 200,
      rateOfReturn: 100,
      dividendYield: 2,
      dividendMonth: [1, 5, 7],
      currencyType: 'USD',
    },
  ],
};

export const useMyPortFolio = (portFolioId?: number) => {
  // const router = useRouter();
  const { data, isLoading } = useMyPortFolioQuery(portFolioId);
  // const redirect = useCallback(() => router.push('/empty'), [router]);

  // useEffect(() => {
  //   if (!data && isLoading) {
  //     redirect();
  //     return;
  //   }
  // }, [data, isLoading, redirect]);

  // TODO: 심플모드에 따라서 다르게 데이터를 내려주도록

  // const myPortFolioData = data?.data.data;
  const myPortFolioData = mockMyPortFolioData;
  if (myPortFolioData) {
    // const {
    //   portfolioId,
    //   totalValue,
    //   totalValueChange,
    //   totalValueChangeRate,
    //   assetDetails,
    // } = myPortFolioData;

    // const {
    //   assetId,
    //   tickerCode,
    //   stockCode,
    //   count,
    //   averagePrice,
    //   currentPrice,
    //   assetPriceChangeRate,
    //   assetPriceChange,
    //   value,
    //   rateOfReturn,
    //   dividendYield,
    //   dividendMonth,
    //   currencyType,
    // } = assetDetails;

    // TODO: 별도의 query로 나누자

    return {
      data: myPortFolioData,
      isLoading,
    };
  }

  return { data, isLoading };
};
