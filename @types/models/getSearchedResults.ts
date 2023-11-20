/**
 * 검색 결과 목록 Response Interface
 */
export interface GetSearchedResults {
  data: GetSearchedResultData[];
  /** 다음 페이지 조회 가능 여부 */
  next: boolean;
  /** 현재 페이지 번호 */
  currentPage: number;
  /** 조회 가능한 최대 페이지 크기 */
  pageTotalSize: number;
}

export interface GetSearchedResultData {
  hasAlreadyStockInPortfolio: boolean;
  /** 해당 종목 자산 아이디 */
  assetId: number;
  /** 해당 종목 ticker 코드 */
  tickerCode: string;
  /** 해당 종목 stock 코드 */
  stockCode: string;
  /** 해당 종목 자산 이름 */
  name: string;
  /** 해당 종목 국가 타입 */
  countryType: 'KOR' | 'USA';
  /** 해당 종목 거래소 타입 */
  marketType:
    | 'KRX'
    | 'KRX_KOSPI'
    | 'KRX_KOSDAQ'
    | 'KRX_KONEX'
    | 'NYSE'
    | 'AMEX'
    | 'NASDAQ'
    | 'UNKNOWN';
  /** 해당 종목 주식/ETF/ETN 타입 */
  assetCategoryType: 'STOCK' | 'ETF' | 'ETN';
}
