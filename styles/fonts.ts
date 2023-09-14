import { css } from '@emotion/react';

export const fontPretendard = css`
  font-family: 'Pretendard';
`;

export const fontFacePretendard = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Regular.otf') format('opentype');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Medium.otf') format('opentype');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Bold.otf') format('opentype');
    font-weight: 700;
    font-display: swap;
  }
`;
