import { portFolioAPI } from '@/core/api/portfolio';
import { useControlMode } from '@/hook/useControlMode';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useMyPortFolioQuery = () => {
  return useQuery(queryKeys.myPortFolio(), portFolioAPI.getMyPortFolio);
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
            ? Math.floor(totalValue * exchangeRate).toLocaleString('ko-kr') +
              '원'
            : Math.floor(totalValue * exchangeRate).toLocaleString('ko-kr') +
              '원',
          totalValueChange:
            Math.floor(totalValueChange * exchangeRate).toLocaleString(
              'ko-kr',
            ) + '원',
          assetDetails: assetDetails.map((pre) => ({
            ...pre,
            averagePrice:
              (pre.averagePrice * exchangeRate).toLocaleString('ko-kr') + '원',
            currentPrice:
              (pre.currentPrice * exchangeRate).toLocaleString('ko-kr') + '원',
            assetPriceChange:
              (pre.assetPriceChange * exchangeRate).toLocaleString('ko-kr') +
              '원',
            value: (pre.value * exchangeRate).toLocaleString('ko-kr') + '원',
          })),
        };
      }
    },
    {
      enabled: !!exchangeRate,
    },
  );
};
