import { atom } from 'jotai';

export interface RecentSearchWordsAtomProps {
  word: string;
  date: string;
}

// jotai atom 생성
export const recentSearchWordsAtom = atom<RecentSearchWordsAtomProps[]>([]);

// Provider를 통해 컨텍스트 생성
// export const StateProvider = ({ children }) => {
//   return (
//     <Provider initialValues={[[selectedStocksAtom, []]]}>{children}</Provider>
//   );
// };
