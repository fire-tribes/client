type ExchangeRateSymbol = 'KRW';
type ExchangeRateSymbolTable = Record<ExchangeRateSymbol, string>;
type ExchangeRateModel = {
  value: number;
  currentType: ExchangeRateSymbol;
};

export type { ExchangeRateSymbol, ExchangeRateModel, ExchangeRateSymbolTable };
