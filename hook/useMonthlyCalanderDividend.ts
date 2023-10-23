import {
  useMonthlyCalanderDividendKRQuery,
  useMonthlyCalanderDividendKRWithSimpleQuery,
} from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';

export const useMonthlyCalanderDividend = () => {
  const { data: monthlyCalanderDividendKRData, status } =
    useMonthlyCalanderDividendKRQuery();
  const { data: monthlyCalanderDividendSimpleKRData } =
    useMonthlyCalanderDividendKRWithSimpleQuery();

  return {
    monthlyCalanderDividendKRData,
    monthlyCalanderDividendSimpleKRData,
    status,
  };
};
