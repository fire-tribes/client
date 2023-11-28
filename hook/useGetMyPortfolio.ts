import useGetMyPortfolioQuery from './useQueryHook/useGetMyPortfolioQuery';

function useGetMyPortfolio() {
  const { myPortfolioDataForEdit } = useGetMyPortfolioQuery();

  const myPortfolioCacheData = myPortfolioDataForEdit?.data;

  return {
    myPortfolioCacheData,
  };
}

export default useGetMyPortfolio;
