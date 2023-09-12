import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 10px 16px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  >div: first-child {
    flex: 1;
    margin-right: 10px;
  }
  div: last-child {
    min-width: 24px;
    height: 24px;
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
  }
`;
const Input = styled.input`
  height: 24px;
  background-color: ${basic.gray1};
  border: none;

  font-size: ${fontSize.caption};
`;

export const SearchInputUI = {
  Container,
  Item,
  InputContainer,
  Input,
} as const;
