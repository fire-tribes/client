import {
  useAnnualDividendExchangeQuery,
  useAnnualDividendExchangeWithSimpleQuery,
  useAnnualDividendQuery,
} from '@/hook/useQueryHook/useAnnualDividendQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAnnualDividend = () => {
  const router = useRouter();
  const { data: annualDividendData, status } = useAnnualDividendQuery();
  const { data: annualDividendExchangeData } = useAnnualDividendExchangeQuery();
  const { data: annualDividendExchangeWithSimpleData } =
    useAnnualDividendExchangeWithSimpleQuery();

  useEffect(() => {
    if (status === 'error') {
      router.push('/500');
    }
  }, [status]);

  return {
    annualDividendData: annualDividendData?.data,
    annualDividendExchangeData,
    annualDividendExchangeWithSimpleData,
    status,
  };
};
