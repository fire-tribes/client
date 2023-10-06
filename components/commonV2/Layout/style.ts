import { NAVIGATOR_HEIGHT } from '@/styles/constants';

import styled from '@emotion/styled';

const S = {
  LayoutBody: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: ${({ theme }) => theme.palette.basic.gray8};
  `,
  LayoutMaxMin: styled.div`
    position: relative;

    width: 100%;
    min-width: 320px;
    max-width: 430px;

    height: 100%;
    min-height: 667px;
    max-height: 932px;

    overflow: hidden;
    border-radius: 8px;
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
