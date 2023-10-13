import {
  useAnnualDividendExchangeQuery,
  useAnnualDividendTaxKRQuery,
  useAnnualDividendExchangeWithSimpleQuery,
  // useAnnualDividendQuery,
  useAnnualDividendSimpleKRQuery,
  useAnnualDividendKRQuery,
} from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  // const { data: annualDividendData, isLoading: annualDividendDataIsLoading } =
  //   useAnnualDividendQuery();
  const { data: annualDividendKRData, isLoading } = useAnnualDividendKRQuery();

  /** USD  */
  const { data: annualDividendExchangeData } = useAnnualDividendExchangeQuery();
  const { data: annualDividendExchangeWithSimpleData } =
    useAnnualDividendExchangeWithSimpleQuery();

  /** KR  */
  const { data: annualDividendTaxKRData } = useAnnualDividendTaxKRQuery();
  const { data: annualDividendSimpleKRData } = useAnnualDividendSimpleKRQuery();

  return {
    annualDividendData: annualDividendKRData?.data,
    annualDividendExchangeData,
    annualDividendExchangeWithSimpleData,
    annualDividendTaxKRData,
    annualDividendSimpleKRData,
    isLoading,
  };
};
