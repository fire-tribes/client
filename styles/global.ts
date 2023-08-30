import { fontFacePretendard } from '@/styles/fonts';
import { css } from '@emotion/react';

export const globalStyle = css`
  * {
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
    font: inherit;
    font-family: Pretendard;
    font-weight: 300;
    color: inherit;
    word-wrap: break-word;
    word-break: keep-all;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  li,
  ul {
    list-style: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* about font */
  ${fontFacePretendard}
`;
