import { fontFacePretendard } from '@/styles/fonts';
import { fontSize } from '@/styles/typography';
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

    font-weight: 700;

    :hover {
      opacity: 0.8;
    }
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
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  h {
    font-weight: 700;
  }

  h1 {
    font-size: ${fontSize.h1};
    font-weight: 700;
  }
  h2 {
    font-size: ${fontSize.h2};
    font-weight: 700;
  }
  h3 {
    font-size: ${fontSize.h3};
    font-weight: 700;
  }
  h4 {
    font-size: ${fontSize.h4};
    font-weight: 700;
  }
  h5 {
    font-size: ${fontSize.h5};
  }

  /* about font */
  ${fontFacePretendard}
`;
