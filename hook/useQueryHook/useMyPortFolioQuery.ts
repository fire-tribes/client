import { useControlMode } from '@/hook/useControlMode';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { portfolioAPI } from '@/core/api/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { getShortCurrencyKR } from '@/components/Chart/utils';
import { useQuery } from '@tanstack/react-query';

export const useMyPortFolioQuery = () => {
  return useQuery(queryKeys.myPortFolio(), portfolioAPI.getMyPortFolio);
};

export const useMyPortFolioExchangeQuery = () => {
  const { data } = useMyPortFolioQuery();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();

  return useQuery(
    queryKeys.myPortFolio(modeData.isSimple, exchangeRate),
    () => {
      const useMyPortFolioQueryData = data?.data.data;

      if (useMyPortFolioQueryData && exchangeRate) {
        const { totalValue, totalValueChange, assetDetails } =
          useMyPortFolioQueryData;

        return {
          ...useMyPortFolioQueryData,
          totalValue: modeData.isSimple
            ? getShortCurrencyKR(Math.floor(totalValue * exchangeRate)) + '원'
            : Math.floor(totalValue * exchangeRate).toLocaleString('ko-kr') +
              '원',
          totalValueChange: modeData.isSimple
            ? getShortCurrencyKR(totalValueChange * exchangeRate) + '원'
            : Math.floor(totalValueChange * exchangeRate).toLocaleString(
                'ko-kr',
              ) + '원',
          assetDetails: assetDetails.map((pre) => ({
            ...pre,
            averagePrice:
              Math.floor(pre.averagePrice * exchangeRate).toLocaleString(
                'ko-kr',
              ) + '원',
            currentPrice:
              Math.floor(pre.currentPrice * exchangeRate).toLocaleString(
                'ko-kr',
              ) + '원',
            assetPriceChange:
              Math.floor(pre.assetPriceChange * exchangeRate).toLocaleString(
                'ko-kr',
              ) + '원',
            value:
              Math.floor(pre.value * exchangeRate).toLocaleString('ko-kr') +
              '원',
          })),
        };
      }
    },
    {
      enabled: !!exchangeRate,
    },
  );
};
