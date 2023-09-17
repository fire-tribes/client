import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const Container = styled.div``;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StockContainer = styled.div`
  display: flex;
  align-items: center;

  div:last-child {
    margin: 10px;
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
