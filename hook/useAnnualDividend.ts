import {
  useAnnualDividendTaxKRQuery,
  useAnnualDividendSimpleKRQuery,
  useAnnualDividendKRQuery,
  // useAnnualDividendQuery,
  // useAnnualDividendExchangeQuery,
  // useAnnualDividendExchangeWithSimpleQuery,
} from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  /** USD  */
  // useAnnualDividendQuery();
  // const { data: annualDividendExchangeData } = useAnnualDividendExchangeQuery();
  // const { data: annualDividendExchangeWithSimpleData } =
  //   useAnnualDividendExchangeWithSimpleQuery();

  /** KR  */
  const { data: annualDividendKRData, status } = useAnnualDividendKRQuery();
  const { data: annualDividendTaxKRData } = useAnnualDividendTaxKRQuery();
  const { data: annualDividendSimpleKRData } = useAnnualDividendSimpleKRQuery();

  return {
    annualDividendData: annualDividendKRData?.data,
    // annualDividendExchangeData,
    // annualDividendExchangeWithSimpleData,
    annualDividendTaxKRData,
    annualDividendSimpleKRData,
    status,
  };
};
