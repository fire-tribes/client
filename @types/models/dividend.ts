export type YearDividendModel = {
  thisMonthDividend: number; // 	이번달 배당금[...],
  dividendChange: number; // 	지난 배당 대비[...],
  annualDividend: number; // 	연간 총 배당금[...],
  dividendPriceRatio: number; // 	투자 배당률[...],
  dividendYieldRatio: number; // 	시가 배당률(배당수익률)[...],
  unPaidTax: number; // 	납부할 세금[...],
  paidTax: number; // 	납부한 세금[...],
  monthlyDividends: MonthlyDividends; // 	월별 배당금{...},
};

type MonthlyDividends = {
  additionalProp1: number;
  additionalProp2: number;
  additionalProp3: number;
};
