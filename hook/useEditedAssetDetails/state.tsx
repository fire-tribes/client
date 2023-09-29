import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { atom } from 'jotai';

export interface EditedAssetDetailsAtomProps {
  assetId: number;
  count: number;
  price: number;
  currencyType: ExchangeRateSymbol;
}

// jotai atom 생성
export const editedAssetDetailsAtom = atom<EditedAssetDetailsAtomProps>({
  assetId: 0,
  count: 0,
  price: 0,
  currencyType: 'USD',
});
