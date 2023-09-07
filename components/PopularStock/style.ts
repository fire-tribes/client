import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const Container = styled.span`
  height: 34px;
  border-radius: 40px;

  background-color: ${basic.gray1};

  padding: 2px 14px;
  margin-right: 8px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const PopularStockUI = {
  Container,
} as const;
