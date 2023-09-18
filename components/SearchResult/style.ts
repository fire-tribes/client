import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
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
    flex: 1;
    margin: 10px;

    >div: last-child {
      font-size: ${fontSize.caption2};
      color: ${basic.gray6};
      font-weight: 100;
    }
  }
`;

export const SearchResultUI = {
  Container,
  Item,
  StockContainer,
} as const;
