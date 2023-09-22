/**
 * 인기 주식 Response Interface
 */

export interface GetPopularStocks {
  /** 해외 주식 Ticker 코드 */
  tickerCode: string;
  /** 국내 주식 종목 코드 */
  stockCode: string;
  /** 주식 종목 이름 */
  name: string;
}
