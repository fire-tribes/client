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

  > div:first-child {
    position: relative;
    > div:first-child {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      ${({ theme }) => `
        color: ${theme.palette.basic.point_blue01};
      `}
    }
    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  > div:last-child {
    flex: 1;
    margin: 10px;

    > div:first-child {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 2줄까지 표시 */
      overflow: hidden;
    }

    > div:last-child {
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
