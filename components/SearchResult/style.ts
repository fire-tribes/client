import styled from '@emotion/styled';

const Container = styled.div`
  padding: 16px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;

  > div:first-child {
    flex: 1;
  }
  > div:last-child {
    width: 20px;
    height: 20px;
  }
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
