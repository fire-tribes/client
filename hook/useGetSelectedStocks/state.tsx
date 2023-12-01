import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { atom } from 'jotai';

export interface SelectedStocksAtomProps {
  assetId: number;
  tickerCode?: string;
  stockCode?: string;
  name: string;
  debouncedValue: string;
  count: string | number;
  price: string | number;
  cachedPrice: Record<ExchangeRateSymbol, string | number | undefined>;
  currencyType: ExchangeRateSymbol;
  countryType: 'KOR' | 'USA';
  marketType:
    | 'KRX'
    | 'KRX_KOSPI'
    | 'KRX_KOSDAQ'
    | 'KRX_KONEX'
    | 'NYSE'
    | 'AMEX'
    | 'NASDAQ'
    | 'UNKNOWN';
  assetCategoryType: 'STOCK' | 'ETF' | 'ETN';
}

// jotai atom 생성
export const selectedStocksAtom = atom<SelectedStocksAtomProps[]>([]);

// Provider를 통해 컨텍스트 생성
// export const StateProvider = ({ children }) => {
//   return (
//     <Provider initialValues={[[selectedStocksAtom, []]]}>{children}</Provider>
//   );
// };
