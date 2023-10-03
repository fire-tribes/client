import {
  useAnnualDividendExchangeQuery,
  useAnnualDividendExchangeWithSimpleQuery,
  useAnnualDividendQuery,
} from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  const { data: annualDividendData, isLoading } = useAnnualDividendQuery();
  const { data: annualDividendExchangeData } = useAnnualDividendExchangeQuery();
  const { data: annualDividendExchangeWithSimpleData } =
    useAnnualDividendExchangeWithSimpleQuery();

  return {
    annualDividendData: annualDividendData?.data,
    annualDividendExchangeData,
    annualDividendExchangeWithSimpleData,
    isLoading,
  };
};
