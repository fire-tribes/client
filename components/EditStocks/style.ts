import styled from '@emotion/styled';

const TopContainer = styled.div`
  ${({ theme }) => `
    color: ${theme.palette.basic.gray6};
    font-size: ${theme.font.size.caption2};
  `}
  font-weight: 400;
  text-align: center;

  margin-bottom: 17px;
`;

const LoadingContainer = styled.div`
  height: calc(100vh - 16px - 52px - 40px - 19px - 52px - 56px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditStocksUI = {
  TopContainer,
  LoadingContainer,
} as const;
