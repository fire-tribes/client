import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 26px;
`;

const Item = styled.div``;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NativeStockInfoContainer = styled.div`
  flex: 1;
  display: flex;

  > div:first-of-type {
    position: relative;
    > div:first-of-type {
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

  > div:last-of-type {
    flex: 1;
    margin: 10px;

    > div:first-of-type {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 2줄까지 표시 */
      overflow: hidden;
    }

    >div: last-of-type {
      font-size: ${fontSize.caption2};
      color: ${basic.gray6};
      font-weight: 100;
    }
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
  div:first-of-type {
    border-radius: 12px 12px 0px 0px;
    border: 1px solid ${basic.gray3};
    background: ${basic.gray0};

    padding: 14px 16px;
  }
  div:last-of-type {
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

const CurrencyChangeButton = styled.button`
  color: ${basic.point_blue02};
  font-weight: 500;
  display: inline-block;
  margin-right: 20px;

  span:first-of-type {
    display: inline-block;
    margin-right: 5px;
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
  CurrencyChangeButton,
  ErrorContainer,
} as const;
