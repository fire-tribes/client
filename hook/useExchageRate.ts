import { ExchangeRateSymbolTable } from '@/@types/models/exchangeRate';
import { useExchangeRateQuery } from '@/hook/useQueryHook/useExchangeRateQuery';

const exchangeRateSymbol: ExchangeRateSymbolTable = {
  KRW: '원',
};

export const useExchageRate = () => {
  const query = useExchangeRateQuery();
  const data = query?.data?.data?.data;

  const rate = data?.value;
  const symbol = data?.currentType;

  const exchangeRate =
    rate && symbol ? `${rate}${exchangeRateSymbol[symbol]}` : '';

  return {
    query,
    data,
    exchangeRate,
  };
};
