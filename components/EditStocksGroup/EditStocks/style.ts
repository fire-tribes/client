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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EditStocksUI = {
  TopContainer,
  LoadingContainer,
} as const;
