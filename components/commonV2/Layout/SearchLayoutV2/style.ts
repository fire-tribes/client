import { NAVIGATOR_HEIGHT } from '@/styles/constants';

import styled from '@emotion/styled';

const S = {
  LayoutBody: styled.div<{ vh: number }>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${({ vh }) => `calc(${vh}px * 100)`};

    @media (min-width: 430px) {
      height: 100vh;
    }

    background-color: ${({ theme }) => theme.palette.basic.gray8};
  `,
  LayoutMaxMin: styled.div`
    /** BottomFixedButton 고정을 위한 position */
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

    > div:last-child {
      position: absolute;
      z-index: 3;
    }
  `,

  LayoutContent: styled.main`
    min-height: inherit;
    max-height: inherit;
    height: 100%;

    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.palette.sementic.bg_white};

    padding-bottom: ${`${NAVIGATOR_HEIGHT}px`};

    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }

    padding: 20px 18px 0px 18px;

    // min-height: 100vh;
    // overflow-x: auto;
    // padding: 16px 16px 56px 16px;
  `,
};

export default S;
