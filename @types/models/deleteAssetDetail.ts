import { ExchangeRateSymbol } from './exchangeRate';

/**
 * Delete Portfolio AssetDetail(PortfolioAssetId) 객체 Response Interface
 */
export interface DeleteAssetDetail {
  portfolioAssetId: number;
  count: number;
  purchasePrice: number;
  currencyType: ExchangeRateSymbol;
  assetId: number;
}
