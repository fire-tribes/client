import {
  useMonthlyCalanderDividendExchangeQuery,
  useMonthlyCalanderDividendQuery,
} from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useMonthlyCalanderDividend = () => {
  const router = useRouter();
  const { data: monthlyCalanderDividendData, status } =
    useMonthlyCalanderDividendQuery();
  const { data: monthlyCalanderDividendExchangeData } =
    useMonthlyCalanderDividendExchangeQuery();

  useEffect(() => {
    if (status === 'error') {
      router.push('/500');
    }
  }, [status]);

  return {
    monthlyCalanderDividendData,
    monthlyCalanderDividendExchangeData,
    status,
  };
};
