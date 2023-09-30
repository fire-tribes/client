import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { atom } from 'jotai';

export interface AssetDetailsAtomProps {
  portfolioAssetId: number;
  assetId: number;
  tickerCode: string;
  count: number;
  averagePrice: number;
  currentPrice: number;
  assetPriceChangeRate: number;
  assetPriceChange: number;
  value: number;
  rateOfReturn: number;
  dividendPriceRatio: number;
  dividendMonth: number[];
  currencyType: ExchangeRateSymbol;
}

// jotai atom 생성
export const assetDetailsAtom = atom<AssetDetailsAtomProps[]>([]);
