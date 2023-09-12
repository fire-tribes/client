import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  background-color: ${basic.gray1};
  width: 290px;
  padding: 14px 16px;

  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 226px;
  height: 24px;
  background-color: ${basic.gray1};
  border: none;

  font-size: ${fontSize.caption};
`;

export const SearchInputUI = {
  Container,
  InputContainer,
  Input,
} as const;
