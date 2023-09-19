import { ExchangeRateSymbolTable } from '@/@types/models/exchangeRate';
import { useExchangeRateQuery } from '@/hook/useQueryHook/useExchangeRateQuery';

const exchangeRateSymbol: ExchangeRateSymbolTable = {
  USD: '원',
  KRW: '$',
};

export const useExchageRate = () => {
  const query = useExchangeRateQuery();

  const data = query?.data?.data?.data;

  const rate = data?.value;
  const currencyType = data?.currencyType;
  const symbol = currencyType ? exchangeRateSymbol[currencyType] : undefined;
  const exchangeRate = undefined;

  if (rate && currencyType && symbol) {
    const exchangeRate = `${rate}${symbol}`;

    return {
      query,
      data,
      exchangeRate,
    };
  }

  return {
    query,
    data,
    exchangeRate,
  };
};
