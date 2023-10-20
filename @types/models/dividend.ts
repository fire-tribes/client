import type { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

/**
 * 이번년도의 총 배당금 Response Type
 */
type AnnualDividendModel = {
  /** 이번달 배당금 */
  thisMonthDividend: number;
  /**지난 배당 대비[...], */
  dividendChange: number;
  /**연간 총 배당금[...], */
  annualDividend: number;
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

type AnnualDividendByIncomeTax = Pick<
  AnnualDividendModel,
  'annualDividend' | 'thisMonthDividend' | 'dividendChange'
>;

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

type DividendCalanderModel = {
  stockCode: string;
  tickerCode: string;
  /** 예상 배당금 지급일 */
  exDividendDate: string;
  /** 배당락일 (배당기준일이란 배당금을 받기위해 주식을 소유하고 있어야 하는 날이다. 배당락일은 배당 기준일의 다음날이며 배당락에 의해 주가가 변동되는 날이다.) */
  expectedPayDate: string;
  /** 예상 배당금 */
  expectedDividends: number;
  /** 통화 */
  currencyType: ExchangeRateSymbol;
};

export {
  type AnnualDividendModel,
  type AnnualDividendByIncomeTax,
  type MonthlyDividends,
  type DividendCalanderModel,
};
