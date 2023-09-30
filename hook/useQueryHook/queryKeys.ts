export const queryKeys = {
  exchangeRate: ['exchangeRate'],
  exampleItemGet: (title: string) => ['exampleItemGet', title],
  myPortFolio: (portfolioId?: number) => ['myPortFolio', portfolioId],
  annualDividend: () => ['annualDividend'],
  popularStocks: () => ['popularStocks'],
  recentSearchWords: () => ['getRecentSearchWords'],
  searchedResults: (word: string) => ['searchedResults', word],
  currentPrice: (assetIds: number) => ['currentPrice', assetIds],
  currentPrices: (assetIds: number[]) => ['currentPrice', assetIds],
  portfolio: () => ['portfolio'],
};
