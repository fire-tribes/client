export const mutationKeys = {
  deleteRecentSearchWord: (searchWord: string) => [
    'deleteRecentSearchWord',
    searchWord,
  ],
  removeRecentSearchWordsAll: () => ['removeRecentSearchWordsAll'],
  makePortfolio: () => ['makePortfolio'],
  addStocksAtPortfolio: () => ['addStocksAtPortfolio'],
};
