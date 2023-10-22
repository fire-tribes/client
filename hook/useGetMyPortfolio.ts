import useGetMyPortfolioQuery from './useQueryHook/useGetMyPortfolioQuery';

function useGetMyPortfolio() {
  const { getMyPortfolioDataForEdit } = useGetMyPortfolioQuery();

  const getMyPortfolioData = getMyPortfolioDataForEdit;

  return {
    getMyPortfolioData,
  };
}

export default useGetMyPortfolio;
