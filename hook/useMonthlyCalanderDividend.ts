import {
  useMonthlyCalanderDividendKRQuery,
  useMonthlyCalanderDividendKRWithSimpleQuery,
} from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useMonthlyCalanderDividend = () => {
  const router = useRouter();

  const { data: monthlyCalanderDividendKRData, status } =
    useMonthlyCalanderDividendKRQuery();
  const { data: monthlyCalanderDividendSimpleKRData } =
    useMonthlyCalanderDividendKRWithSimpleQuery();

  useEffect(() => {
    if (status === 'error') {
      router.push('/500');
    }
  }, [status]);

  return {
    monthlyCalanderDividendKRData,
    monthlyCalanderDividendSimpleKRData,
    status,
  };
};
