import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${basic.gray1};
  border-radius: 20px;

  color: ${basic.point_blue02};
  font-size: ${fontSize.body3};
`;

export const FeedStockInfosUI = {
  Button,
} as const;
