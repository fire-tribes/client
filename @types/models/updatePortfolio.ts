import { ExchangeRateSymbol } from './exchangeRate';

/**
 * 포트폴리오 생성 Response Interface
 */
export interface UpdatePortfolio {
  portfolioAssetId: number;
  count: number;
  purchasePrice: number;
  currencyType: ExchangeRateSymbol;
  assetId: number;
}
