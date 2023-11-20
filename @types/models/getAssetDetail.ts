import { ExchangeRateSymbol } from './exchangeRate';

/**
 * 포트폴리오 자산 정보 확인 Response Interface
 */
export type GetAssetDetail = {
  /** 포트폴리오 자산 아이디 */
  portfolioAssetId: number;
  /** 자산 아이디 */
  assetId: number;
  /** 해당 종목 구매 수량 */
  count: number;
  /** 해당 종목 구매 가격 */
  purchasePrice: number;
  /** 해당 종목 화폐 단위 */
  currencyType: ExchangeRateSymbol;
  /** 해당 종목 TickerCode */
  tickerCode: string;
  /** 해당 종목 StockCode */
  stockCode: string;
  /** 해당 종목 이름 */
  name: string;
};
