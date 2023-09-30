import { atom } from 'jotai';

export interface portfolioAtomProps {
  portfolioId: number;
  totalValue: number;
  totalValueChange: number;
  totalValueChangeRate: number;
  assetDetails: {
    assetId: number;
    tickerCode: string;
    stockCode: string;
    count: number;
    averagePrice: number;
    currentPrice: number;
    assetPriceChangeRate: number;
    assetPriceChange: number;
    value: number;
    rateOfReturn: number;
    dividendPriceRatio: number;
    dividendMonth: number[];
    currencyType: 'USD';
  }[];
}

// jotai atom 생성
export const portfolioAtom = atom<portfolioAtomProps | undefined>(undefined);
