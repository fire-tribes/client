import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StockContainer = styled.div`
  display: flex;

  > div:last-child {
    margin: 10px;
  }
`;

export const SearchResultUI = {
  Container,
  StockContainer,
} as const;
