import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 74px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background-color: ${basic.gray1};

  border-radius: 40px;

  margin-right: 8px;
`;
const Item = styled.span`
  white-space: nowrap;

  > span:last-child {
    margin-left: 6px;
    width: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const PopularStockUI = {
  Container,
  Item,
} as const;
