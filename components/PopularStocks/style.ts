import styled from '@emotion/styled';

const BottomContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;

  scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨김 */
  ::-webkit-scrollbar {
    width: 0; /* Chrome 및 Safari에서 스크롤바 숨김 */
  }

  div {
    display: inline-block;
  }
  div:last-child span {
    margin-right: 0px;
  }
`;

export const PopularStocksUI = {
  BottomContainer,
} as const;
