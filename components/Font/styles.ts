import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { CommonFontProps } from '@/components/Font';

type StyledFontProps = Pick<
  CommonFontProps,
  'fontSize' | 'fontWeight' | 'color'
>;

export const CommonFontUI = {
  Font: styled.div<StyledFontProps>`
    ${({ theme, fontSize, fontWeight, color }) => css`
      font-size: ${fontSize && theme.font.size[fontSize]};
      font-weight: ${fontWeight && theme.font.weight[fontWeight]};
      color: ${color && theme.palette.basic[color]};
    `}
  `,
};

type AllHTMLTagsType = keyof JSX.IntrinsicElements;

function factoryFontUI(component: AllHTMLTagsType) {
  return CommonFontUI.Font.withComponent(component);
}

export const Span = factoryFontUI('nav');
