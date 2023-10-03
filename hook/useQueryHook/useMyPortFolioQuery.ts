import { useControlMode } from '@/hook/useControlMode';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { portfolioAPI } from '@/core/api/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { getShortCurrencyKR } from '@/components/Chart/utils';
import { useControlTax } from '@/hook/useControlTax';
import { useQuery } from '@tanstack/react-query';

export const useMyPortFolioQuery = () => {
  return useQuery(queryKeys.myPortFolio(), portfolioAPI.getMyPortFolio);
};

export const useMyPortFolioExchangeQuery = () => {
  const { data } = useMyPortFolioQuery();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();

  const divideByTax = (price: number) => Math.floor(price * (85 / 100));
  const divideSimple = (price: number) => getShortCurrencyKR(Math.floor(price));

  const getPriceByTaxWithSimple = (price: number) => {
    let newPrice: number = Math.floor(price);

    if (taxData.isTax) {
      newPrice = divideByTax(price);
    }

    if (modeData.isSimple) {
      return divideSimple(newPrice) + '원';
    }

    return newPrice.toLocaleString('ko-kr') + '원';
  };

  const getPriceByTax = (price: number) => {
    if (taxData.isTax) {
      return divideByTax(price).toLocaleString('ko-kr') + '원';
    }

    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };

  return useQuery(
    queryKeys.myPortFolio(modeData.isSimple, exchangeRate, taxData.isTax),
    () => {
      const useMyPortFolioQueryData = data?.data.data;

      if (useMyPortFolioQueryData && exchangeRate) {
        const { totalValue, totalValueChange, assetDetails } =
          useMyPortFolioQueryData;

        return {
          ...useMyPortFolioQueryData,
          totalValue: getPriceByTaxWithSimple(totalValue * exchangeRate),
          totalValueChange: getPriceByTaxWithSimple(
            totalValueChange * exchangeRate,
          ),
          assetDetails: assetDetails.map((pre) => ({
            ...pre,
            averagePrice: getPriceByTax(pre.averagePrice * exchangeRate),
            currentPrice: getPriceByTax(pre.currentPrice * exchangeRate),
            assetPriceChange: getPriceByTax(
              pre.assetPriceChange * exchangeRate,
            ),
            value: getPriceByTax(pre.value * exchangeRate),
          })),
        };
      }
    },
    {
      enabled: !!exchangeRate,
    },
  );
};
