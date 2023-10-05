import styled from '@emotion/styled';

const Container = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  /* Firefox에서 스크롤바 숨김 */
  scrollbar-width: none;
  /* IE/Edge에서 스크롤바 숨김 */
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    /* Chrome 및 Safari에서 스크롤바 숨김 */
    width: 0;
  }

  margin-top: 22px;
  margin-bottom: 18px;

  > div {
    display: inline-block;
  }
  > div:last-child {
    margin-right: 0px;
  }
`;

export const ShowAddedStocksUI = {
  Container,
} as const;
