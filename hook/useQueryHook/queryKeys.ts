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
  ) => ['monthlyCalanderDividend', isSimple, isTax],
  popularStocks: () => ['popularStocks'],
  recentSearchWords: () => ['getRecentSearchWords'],
  searchedResults: (word: string, pageIndex: number) => [
    'searchedResults',
    word,
    pageIndex,
  ],
  currentPrice: (assetIds: number) => ['currentPrice', assetIds],
  currentPrices: (assetIds: number[]) => ['currentPrice', assetIds],
  portfolio: () => ['portfolio'],
};
