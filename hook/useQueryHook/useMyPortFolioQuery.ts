import { useControlMode } from '@/hook/useControlMode';
import { portfolioAPI } from '@/core/api/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useControlTax } from '@/hook/useControlTax';
import { useFormatPrice } from '@/hook/useFormatPrice';
import { MyPortfolioModel } from '@/@types/models/portfolio';
import { ResponseSuccess } from '@/@types/models/response';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useMyPortFolioQuery = () => {
  return useQuery(queryKeys.myPortFolio(), portfolioAPI.getMyPortFolio, {
    refetchOnMount: false,
  });
};

export const useMyPortFolioTaxWithSimpleKRQuery = () => {
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();
  const queryClient = useQueryClient();

  const { getPriceBySimple, getPrice } = useFormatPrice();

  return useQuery(
    queryKeys.changedMyPortfolioKR(modeData.isSimple, taxData.isTax),
    () => {
      const cachedMyPortfolioQueryData:
        | AxiosResponse<ResponseSuccess<MyPortfolioModel>>
        | undefined = queryClient.getQueryData(queryKeys.myPortFolio());
      const cachedMyPortfolioData = cachedMyPortfolioQueryData?.data.data;

      if (cachedMyPortfolioData) {
        const { totalValue, totalValueChange, assetDetails } =
          cachedMyPortfolioData;

        return {
          ...cachedMyPortfolioData,
          totalValue: getPriceBySimple(totalValue),
          totalValueChange: getPriceBySimple(totalValueChange),
          assetDetails: assetDetails.map((pre) => ({
            ...pre,
            averagePrice: getPrice(pre.averagePrice),
            currentPrice: getPrice(pre.currentPrice),
            assetPriceChange: getPrice(pre.assetPriceChange),
            value: getPrice(pre.value),
          })),
        };
      }

      return null;
    },
  );
};
