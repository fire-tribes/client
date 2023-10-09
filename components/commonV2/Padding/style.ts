import { PaddingStyledProps } from '@/components/commonV2/Padding';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledPadding = styled.div<PaddingStyledProps>`
  ${({ padding, paddingLeft, paddingRight, paddingTop, paddingBottom }) => css`
    padding: ${padding};
    width: 100%;

    padding-top: ${typeof paddingTop === 'number'
      ? `${paddingTop}px`
      : paddingTop};
    padding-bottom: ${typeof paddingBottom === 'number'
      ? `${paddingBottom}px`
      : paddingBottom};
    padding-left: ${typeof paddingLeft === 'number'
      ? `${paddingLeft}px`
      : paddingLeft};
    padding-right: ${typeof paddingRight === 'number'
      ? `${paddingRight}px`
      : paddingRight};
  `}
`;
