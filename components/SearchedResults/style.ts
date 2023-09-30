import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  height: calc(100vh - 16px - 52px - 40px - 19px - 52px - 56px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchedResultsUI = {
  LoadingContainer,
} as const;
