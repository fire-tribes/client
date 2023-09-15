import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { CommonBarProps } from '@/components/common/Bar';

export const StyledCommonBar = styled.div<CommonBarProps>`
  ${({ width, height, theme }) => css`
    width: ${width};
    height: ${height};
    background-color: ${theme.palette.basic.gray1};
  `}
`;
