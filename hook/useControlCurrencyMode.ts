import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const CURRENCY_LIST = ['USD', 'KRW'] as const;
const INITIAL_CURRENCY = CURRENCY_LIST[0];
type CurrencyListElementType = (typeof CURRENCY_LIST)[number];

const currencyModeAtom = atom<ExchangeRateSymbol>(INITIAL_CURRENCY);
const TOGGLE_CURRENCY_TABLE: Record<
  CurrencyListElementType,
  CurrencyListElementType
> = {
  KRW: 'USD',
  USD: 'KRW',
};

const CURRENCY_TYPE_KEY = 'currencyType';

export const useControlCurrencyMode = () => {
  const [currencyMode, setCurrencyMode] = useAtom(currencyModeAtom);

  const toggleCurrencyMode = () => {
    if (currencyMode === null) return;

    setCurrencyMode(TOGGLE_CURRENCY_TABLE[currencyMode]);
    localStorage.setItem(
      CURRENCY_TYPE_KEY,
      TOGGLE_CURRENCY_TABLE[currencyMode],
    );
  };

  const initCurrencyMode = () => {
    setCurrencyMode(INITIAL_CURRENCY);
    localStorage.setItem(CURRENCY_TYPE_KEY, INITIAL_CURRENCY);
  };

  const getTypeCheckedValue = (value: string) => {
    return (
      ([...CURRENCY_LIST] as string[]).includes(value) &&
      (value as CurrencyListElementType)
    );
  };

  useEffect(() => {
    const beforeTypeCheckingLocalStorageItem =
      localStorage.getItem(CURRENCY_TYPE_KEY);

    if (beforeTypeCheckingLocalStorageItem) {
      const typeCheckedValue = getTypeCheckedValue(
        beforeTypeCheckingLocalStorageItem,
      );

      typeCheckedValue && setCurrencyMode(typeCheckedValue);
      return;
    }
    initCurrencyMode();
  }, []);

  return {
    currencyMode,
    toggleCurrencyMode,
  };
};
