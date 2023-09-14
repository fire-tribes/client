import styled from '@emotion/styled';
import type { BasicColorKeys } from '@/styles/palette';
import type { FontSizeKeys } from '@/styles/typography';

export const CommonFontUI = {
  Font: styled.div<{ fontSize: FontSizeKeys; color: BasicColorKeys }>`
    font-size: ${({ theme, fontSize }) => theme.font[fontSize]};
    color: ${({ theme, color }) => theme.palette.basic[color]};
  `,
};
