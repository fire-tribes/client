import useGetMyPortfolioQuery from './useQueryHook/useGetMyPortfolioQuery';

function useGetMyPortfolio() {
  const { myPortfolioDataForEdit } = useGetMyPortfolioQuery();

  const getMyPortfolioData = myPortfolioDataForEdit?.data;

  return {
    getMyPortfolioData,
  };
}

export default useGetMyPortfolio;
