import { atom } from 'jotai';

export interface portfolioListAtomProps {
  success: boolean;
  data: {
    portfolioId: number;
    totalValue: number;
    totalValueChange: number;
    totalValueChangeRate: number;
    assetDetails: [
      {
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
      },
    ];
  };
  errorCode: string;
  message: string;
}

// jotai atom 생성
export const portfolioListAtom = atom<portfolioListAtomProps | undefined>(
  undefined,
);
