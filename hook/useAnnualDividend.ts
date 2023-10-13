import {
  useAnnualDividendExchangeQuery,
  useAnnualDividendExchangeWithSimpleQuery,
  useAnnualDividendQuery,
} from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  const { data: annualDividendData, status } = useAnnualDividendQuery();
  const { data: annualDividendExchangeData } = useAnnualDividendExchangeQuery();
  const { data: annualDividendExchangeWithSimpleData } =
    useAnnualDividendExchangeWithSimpleQuery();

  return {
    annualDividendData: annualDividendData?.data,
    annualDividendExchangeData,
    annualDividendExchangeWithSimpleData,
    status,
  };
};
