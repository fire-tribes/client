import { atom } from 'jotai';

export interface FormDataAtomProps {
  portfolioId: number;
  assets: {
    assetId: number;
    price: number;
    count: number;
    currencyType: string;
  }[];
}

// jotai atom 생성
export const formDataAtom = atom<FormDataAtomProps | undefined>(undefined);

// Provider를 통해 컨텍스트 생성
// export const StateProvider = ({ children }) => {
//   return (
//     <Provider initialValues={[[selectedStocksAtom, []]]}>{children}</Provider>
//   );
// };
