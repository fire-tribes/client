import styled from '@emotion/styled';

const Container = styled.div`
  padding: 16px;
`;
const Item = styled.div`
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
  Item,
  StockContainer,
} as const;
