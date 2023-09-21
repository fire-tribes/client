type ExchangeRateSymbol = 'KRW' | 'USD';
type ExchangeRateSymbolTable = Record<ExchangeRateSymbol, string>;
type ExchangeRateModel = {
  value: number;
  currencyType: ExchangeRateSymbol;
};

export type { ExchangeRateSymbol, ExchangeRateModel, ExchangeRateSymbolTable };
