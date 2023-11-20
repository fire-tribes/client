import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { atom } from 'jotai';

export interface EditAssetDetailAtomProps {
  portfolioAssetId: number;
  assetId: number;
  count: number | string;
  purchasePrice: number | string;
  currencyType: ExchangeRateSymbol;
  tickerCode: string;
  stockCode: string;
  name: string;
}

// jotai atom 생성
export const editAssetDetailAtom = atom<EditAssetDetailAtomProps>({
  portfolioAssetId: 0,
  assetId: 0,
  count: '',
  purchasePrice: '',
  currencyType: 'USD',
  tickerCode: '',
  stockCode: '',
  name: '',
});
