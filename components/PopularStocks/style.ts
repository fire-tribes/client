import styled from '@emotion/styled';

const Container = styled.div``;

const Header = styled.h6``;

const BottomContainer = styled.div`
  height: 36px;

  white-space: nowrap;
  overflow-x: scroll;
  /** Firefox에서 스크롤바 숨김 */
  scrollbar-width: none;
  /** IE/Edge에서 스크롤바 숨김 */
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    /** Chrome 및 Safari에서 스크롤바 숨김 */
    width: 0;
  }

  div {
    display: inline-block;
  }
  div:last-child span {
    margin-right: 0px;
  }
`;

export const PopularStocksUI = {
  Container,
  Header,
  BottomContainer,
} as const;
