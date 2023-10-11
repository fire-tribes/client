import styled from '@emotion/styled';

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  white-space: nowrap;

  padding-bottom: 10px;
`;

const NothingRecentSearchWordsContainer = styled.div`
  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    white-space: nowrap;
    text-align: center;
    ${({ theme }) => `
      color: ${theme.palette.basic.gray6};
    `}
    height: 72px;
    line-height: 24px;
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RecentSearchWordsUI = {
  TopContainer,
  NothingRecentSearchWordsContainer,
  LoadingContainer,
} as const;
