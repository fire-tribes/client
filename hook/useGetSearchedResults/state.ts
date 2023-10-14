import { atom } from 'jotai';

export interface SearchedResultsAtomProps {
  assetId: number;
  tickerCode: string;
  stockCode: string;
  name: string;
  hasAlreadyStockInPortfolio: boolean;
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
export const searchedResultsAtom = atom<SearchedResultsAtomProps[]>([]);

// Provider를 통해 컨텍스트 생성
// export const StateProvider = ({ children }) => {
//   return (
//     <Provider initialValues={[[selectedStocksAtom, []]]}>{children}</Provider>
//   );
// };
