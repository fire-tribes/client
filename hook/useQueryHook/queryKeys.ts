import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

export const queryKeys = {
  exchangeRate: ['exchangeRate'],
  exampleItemGet: (title: string) => ['exampleItemGet', title],
  myPortFolio: () =>
    // isSimple?: boolean | null,
    // exchangeRate?: number,
    // isTax?: boolean | null,
    [
      'myPortFolio',
      // isSimple,
      // isTax,
      // exchangeRate
    ],
  changedMyPortfolio: (
    isSimple?: boolean | null,
    exchangeRate?: number,
    isTax?: boolean | null,
  ) => ['changedMyPortfolio', isSimple, isTax, exchangeRate],
  changedMyPortfolioKR: (isSimple?: boolean | null, isTax?: boolean | null) => [
    'changedMyPortfolio',
    isSimple,
    isTax,
  ],
  annualDividend: (
    isSimple?: boolean | null,
    exchangeRate?: number,
    isTax?: boolean | null,
  ) => ['annualDividend', isSimple, isTax, exchangeRate],
  annualDividendKR: (isSimple?: boolean | null, isTax?: boolean | null) => [
    'annualDividendKR',
    isSimple,
    isTax,
  ],
  monthlyCalanderDividend: (
    isSimple?: boolean | null,
    exchangeRate?: number,
    isTax?: boolean | null,
  ) => ['monthlyCalanderDividend', isSimple, isTax, exchangeRate],
  monthlyCalanderDividendKR: (
    isSimple?: boolean | null,

    isTax?: boolean | null,
  ) => ['monthlyCalanderDividendKR', isSimple, isTax],
  popularStocks: () => ['popularStocks'],
  recentSearchWords: () => ['getRecentSearchWords'],
  searchedResults: (word: string) => ['searchedResults', word],
  currentPrice: (assetId: number, currencyType: ExchangeRateSymbol) => [
    'currentPrice',
    assetId,
    currencyType,
  ],
  currentPrices: (assetIds: number[]) => ['currentPrice', assetIds],
  assetDetail: () => ['assetDetail'],
};
