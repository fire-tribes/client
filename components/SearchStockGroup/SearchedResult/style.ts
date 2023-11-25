import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 16px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;

  > div:first-of-type {
    flex: 1;
  }
  > div:last-of-type {
    width: 20px;
    height: 20px;
  }
`;

const StockContainer = styled.div`
  display: flex;
  align-items: center;

  > div:last-of-type {
    flex: 1;
    margin: 10px;

    > div:first-of-type {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 2줄까지 표시 */
      overflow: hidden;
    }

    > div:last-of-type {
      font-size: ${fontSize.caption2};
      color: ${basic.gray6};
      font-weight: 100;
    }
  }
`;

export const SearchedResultUI = {
  Container,
  Item,
  StockContainer,
} as const;
