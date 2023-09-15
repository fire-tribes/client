import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div``;

const Item = styled.div``;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NativeStockInfoContainer = styled.div`
  display: flex;

  > div:last-child {
    margin: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  cursor: pointer;

  button {
    opacity: 1;
  }
`;

const BottomContainer = styled.div`
  div:first-child {
    border-radius: 12px 12px 0px 0px;
    border: 1px solid ${basic.gray3};
    background: ${basic.gray0};

    padding: 14px 16px;
  }
  div:last-child {
    display: flex;

    border-radius: 0px 0px 12px 12px;
    border: 1px solid ${basic.gray3};
    background: ${basic.gray0};

    padding: 14px 16px;

    button {
      white-space: nowrap;
    }
  }

  input {
    border: 1px solid ${basic.gray3};
    background: ${basic.gray0};
    border: none;

    width: 100%;
  }
`;

const ErrorContainer = styled.span`
  color: ${basic.point_red01};
  font-size: ${fontSize.body3};
`;

export const FeedStockInfoUI = {
  Container,
  Item,
  TopContainer,
  NativeStockInfoContainer,
  ButtonContainer,
  BottomContainer,
  ErrorContainer,
} as const;
