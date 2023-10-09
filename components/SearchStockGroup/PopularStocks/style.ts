import styled from '@emotion/styled';

const Container = styled.div``;

const Header = styled.h6`
  margin-bottom: 6px;
`;

const BottomContainer = styled.div`
  width: 100%;
  line-height: 38px;

  white-space: nowrap;
  overflow-x: auto;
  /** Firefox에서 스크롤바 숨김 */
  scrollbar-width: none;
  /** IE/Edge에서 스크롤바 숨김 */
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    /** Chrome 및 Safari에서 스크롤바 숨김 */
    width: 0;
  }

  margin-bottom: 18px;
  div {
    display: inline-block;
  }
  div:last-child {
    margin-right: 0px;
  }
`;

export const PopularStocksUI = {
  Container,
  Header,
  BottomContainer,
} as const;
