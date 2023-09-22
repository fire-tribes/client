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

export const EditStocksUI = {
  TopContainer,
} as const;
