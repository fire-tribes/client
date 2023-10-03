import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  > div:first-child {
    flex: 1;
    margin-right: 10px;
  }

  > div:last-child {
    height: 24px;
  }
  > div:last-child:hover {
    cursor: pointer;
    opacity: 0.7;

    display: flex;
    align-items: center;
  }
`;

const InputContainer = styled.div`
  background-color: ${basic.gray1};
  padding: 14px 16px;

  border-radius: 12px;

  display: flex;
  align-items: center;

  div:first-child {
    width: 24px;
    height: 24px;

    margin-right: 5px;
  }
  div:nth-of-type(2) {
    flex: 1;

    input {
      width: 100%;
    }
  }

  div:last-child {
    margin-left: 5px;
    display: flex;
    align-items: center;
    button {
      height: 16px;
    }
  }
`;
const Input = styled.input`
  height: 24px;
  background-color: ${basic.gray1};
  border: none;

  font-size: ${fontSize.body1};
`;

export const SearchInputUI = {
  Container,
  Item,
  InputContainer,
  Input,
} as const;
