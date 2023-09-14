import styled from '@emotion/styled';
import type { BasicColorKeys } from '@/styles/palette';
import type { FontSizeKeys } from '@/styles/typography';

export const CommonFontUI = {
  Font: styled.div<{ fontSize?: FontSizeKeys; color?: BasicColorKeys }>`
    font-size: ${({ theme, fontSize }) => fontSize && theme.font[fontSize]};
    color: ${({ theme, color }) => color && theme.palette.basic[color]};
  `,
};
