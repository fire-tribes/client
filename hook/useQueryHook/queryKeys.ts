export const queryKeys = {
  exchangeRate: ['exchangeRate'],
  exampleItemGet: (title: string) => ['exampleItemGet', title],
  myPortFolio: (isSimple?: boolean | null, exchangeRate?: number) => [
    'myPortFolio',
    isSimple,
    exchangeRate,
  ],
  annualDividend: (isSimple?: boolean | null, exchangeRate?: number) => [
    'annualDividend',
    isSimple,
    exchangeRate,
  ],
  monthlyCalanderDividend: (
    isSimple?: boolean | null,
    exchangeRate?: number,
  ) => ['monthlyCalanderDividend', isSimple, exchangeRate],
  popularStocks: () => ['popularStocks'],
  recentSearchWords: () => ['getRecentSearchWords'],
  searchedResults: (word: string) => ['searchedResults', word],
  presentPrice: (assetIds: number) => ['presentPrice', assetIds],
  portfolio: () => ['portfolio'],
};
