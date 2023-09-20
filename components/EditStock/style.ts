import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const Container = styled.div``;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;

  > div:first-child {
    flex: 1;
  }
`;

const StockContainer = styled.div`
  display: flex;
  align-items: center;

  div:last-child {
    margin: 10px;
    > p {
      ${({ theme }) => `
        font-size: ${theme.font.size.body2};
      `}
    }
    > a {
      ${({ theme }) => `
        font-size: ${theme.font.size.caption};
        color: ${theme.palette.basic.point_blue01};
      `}
      font-weight: 500;
    }
  }
`;

const ButtonContainer = styled.div`
  button {
    padding: 7px 8px;
    border-radius: 4px;
    background: ${basic.gray1};
  }

  button:first-child {
    margin-right: 10px;
  }
  button:last-child {
    margin-left: 10px;
  }
`;

export const EditStockUI = {
  Container,
  Item,
  StockContainer,
  ButtonContainer,
} as const;
