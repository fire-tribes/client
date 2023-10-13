import {
  useAnnualDividendExchangeQuery,
  useAnnualDividendTaxKRQuery,
  useAnnualDividendExchangeWithSimpleQuery,
  useAnnualDividendQuery,
  useAnnualDividendSimpleKRQuery,
  useAnnualDividendKRQuery,
} from '@/hook/useQueryHook/useAnnualDividendQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAnnualDividend = () => {
  const router = useRouter();

  /** USD  */
  useAnnualDividendQuery();
  const { data: annualDividendExchangeData } = useAnnualDividendExchangeQuery();
  const { data: annualDividendExchangeWithSimpleData } =
    useAnnualDividendExchangeWithSimpleQuery();

  /** KR  */
  const { data: annualDividendKRData, status } = useAnnualDividendKRQuery();
  const { data: annualDividendTaxKRData } = useAnnualDividendTaxKRQuery();
  const { data: annualDividendSimpleKRData } = useAnnualDividendSimpleKRQuery();

  useEffect(() => {
    if (status === 'error') {
      router.push('/500');
    }
  }, [status]);

  return {
    annualDividendData: annualDividendKRData?.data,
    annualDividendExchangeData,
    annualDividendExchangeWithSimpleData,
    annualDividendTaxKRData,
    annualDividendSimpleKRData,
    status,
  };
};
