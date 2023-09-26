import { atom } from 'jotai';

export interface SelectedStocksAtomProps {
  assetId: number;
  tickerCode: string;
  stockCode: string;
  debouncedValue: string;
  count: string;
  price: string;
  name: string;
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
