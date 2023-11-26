import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.palette.basic.gray1}
  `}
`;

const Item = styled.div``;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: block;
    height: 24px;
    line-height: 24px;
  }
  > div:last-of-type {
    width: 25px;
    height: 28px;
  }
`;

export const BackwardUI = {
  Container,
  Item,
  TopContainer,
} as const;
