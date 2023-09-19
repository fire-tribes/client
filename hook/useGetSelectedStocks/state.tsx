import { atom } from 'jotai';

export interface SelectedStocksAtomProps {
  assetId: number;
  tickerCode: string;
  stockCode: string;
  name: string;
  category: {
    countryType: 'KOR';
    marketType: 'KRX';
    assetCategoryType: 'STOCK';
  };
}

// jotai atom 생성
export const selectedStocksAtom = atom<SelectedStocksAtomProps[]>([]);

// Provider를 통해 컨텍스트 생성
// export const StateProvider = ({ children }) => {
//   return (
//     <Provider initialValues={[[selectedStocksAtom, []]]}>{children}</Provider>
//   );
// };
