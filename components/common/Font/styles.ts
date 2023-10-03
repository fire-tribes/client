import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { CommonFontProps } from '@/components/common/Font';

type StyledFontProps = Pick<
  CommonFontProps,
  'fontSize' | 'fontWeight' | 'color' | 'textAlign'
>;

export const CommonFontUI = {
  Font: styled.div<StyledFontProps>`
    ${({ theme, fontSize, fontWeight, textAlign, color }) => css`
      font-size: ${fontSize && theme.font.size[fontSize]};
      font-weight: ${fontWeight && theme.font.weight[fontWeight]};
      color: ${color && theme.palette.basic[color]};
      text-align: ${textAlign && textAlign};
    `}
  `,
};

type AllHTMLTagsType = keyof JSX.IntrinsicElements;

function factoryFontUI(component: AllHTMLTagsType) {
  return CommonFontUI.Font.withComponent(component);
}

export const Span = factoryFontUI('nav');
