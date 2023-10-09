import { NAVIGATOR_HEIGHT } from '@/styles/constants';

import styled from '@emotion/styled';

const S = {
  LayoutBody: styled.div<{ vh: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */

    height: ${({ vh }) => `calc(${vh}px * 100)`};

    background-color: ${({ theme }) => theme.palette.basic.gray8};
  `,
  LayoutMaxMin: styled.div`
    position: relative;
    width: 100%;

    max-height: initial;
    min-height: initial;
    height: 100%;

    overflow: hidden;
    border-radius: none;

    @media (min-width: 430px) {
      min-height: 667px;
      max-height: 932px;
      height: 100%;

      min-width: 320px;
      max-width: 430px;
      width: 100%;

      border-radius: 8px;
    }
  `,
  LayoutContent: styled.main`
    min-height: inherit;
    max-height: inherit;
    height: 100%;

    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.palette.sementic.bg_white};

    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;

    padding-bottom: ${`${NAVIGATOR_HEIGHT}px`};
  `,
};

export default S;
