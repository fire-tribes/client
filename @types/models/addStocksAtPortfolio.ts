import { ExchangeRateSymbol } from './exchangeRate';

/**
 * 포트폴리오에 자산 추가 Response Interface
 * Post Method의 경우, 구체적인 동사 사용
 */
export interface AddStocksAtPortfolio {
  /** 포트폴리오에 추가된 자산 ID */
  portfolioAssetId: number;
  /** 포트폴리오에 추가된 자산 수량 */
  count: number;
  /** 포트폴리오에 추가된 자산 가격 */
  purchasePrice: number;
  /** 포트폴리오에 추가된 자산 화폐 단위 */
  currencyType: ExchangeRateSymbol;
  /** 해당 종목 자산 아이디 */
  assetId: number;
}
