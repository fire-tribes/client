import styled from '@emotion/styled';
import type { FontSizeKeys } from '@/styles/typography';

export const CommonFontUI = {
  Font: styled.div<{ fontSize: FontSizeKeys }>`
    font-size: ${({ theme, fontSize }) => theme.font[fontSize]};
  `,
};
