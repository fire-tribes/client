// TODO:

import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

export type MyPortfolioModel = {
  portfolioId: number;
  totalValue: 0;
  totalValueChange: 0;
  totalValueChangeRate: 0;
  assetDetails: MyportfoliAssetDetailModel;
};

export type MyportfoliAssetDetailModel = {
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
  dividendYield: number;
  dividendMonth: number[];
  currencyType: ExchangeRateSymbol;
};
