import styled from '@emotion/styled';

const TopContainer = styled.div`
  white-space: nowrap;

  overflow-x: scroll;
  scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨김 */
  ::-webkit-scrollbar {
    width: 0; /* Chrome 및 Safari에서 스크롤바 숨김 */
  }

  margin-top: 22px;

  display: flex;
  align-items: center;
`;

export const SearchResultsUI = {
  TopContainer,
} as const;
