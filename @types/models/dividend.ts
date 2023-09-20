/**
 * 이번년도의 총 배당금 Response Type
 */
export type YearDividendModel = {
  /** 이번달 배당금 */
  thisMonthDividend: number;
  /**지난 배당 대비[...], */
  dividendChange: number;
  /**연간 총 배당금[...], */
  annualDividend: number | 'NaN';
  /**투자 배당률[...], */
  dividendPriceRatio: number;
  /**시가 배당률(배당수익률)[...], */
  dividendYieldRatio: number;
  /**납부할 세금[...], */
  unPaidTax: number;
  /**납부한 세금[...], */
  paidTax: number;
  /**월별 배당금 달이 영어로 들어옵니다. {...} */
  monthlyDividends: MonthlyDividends;
};

/** 월별 배당금으로 들어올 수 있는 타입 */
type MonthlyDividends = {
  JANUARY?: number;
  FEBRUARY?: number;
  MARCH?: number;
  APRIL?: number;
  MAY?: number;
  JUNE?: number;
  JULY?: number;
  AUGUST?: number;
  SEPTEMBER?: number;
  OCTOBER?: number;
  NOVEMBER?: number;
  DECEMBER?: number;
};
