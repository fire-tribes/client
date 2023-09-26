import { basic } from '@/styles/palette';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
  line-height: 19px;
  height: 19px;
  color: ${basic.gray5};
  font-size: ${fontSize.caption2};
`;

export const DateDisplayUI = {
  Container,
} as const;
