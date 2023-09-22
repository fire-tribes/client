import { atom } from 'jotai';

export interface assetDetailsAtomProps {
  assetId: number;
  tickerCode: string;
  stockCode: string;
  count: number;
  averagePrice: string;
  currentPrice: string;
  assetPriceChangeRate: string;
  assetPriceChange: string;
  value: number;
  rateOfReturn: number;
  dividendPriceRatio: number;
  dividendMonth: number[];
  currencyType: 'KRW';
}

// jotai atom 생성
export const assetDetailsAtom = atom<assetDetailsAtomProps[]>([]);
