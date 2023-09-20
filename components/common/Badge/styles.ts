import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import type { CommonBadgeProps } from '@/components/common/Badge';

export type ButtonVariantProps = 'text' | 'outlined' | 'contained';
export type ButtonSizeProps = 'small' | 'medium' | 'large';
export type StyledBadgeProps = Required<
  Pick<CommonBadgeProps, 'size' | 'variant' | 'mainColor' | 'subColor'>
>;

const rounded = {
  rect: css`
    border-radius: 1.25em;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

const size = {
  small: css`
    min-width: 67px;
    min-height: 36px;
    padding: 8px 10px;
  `,
  medium: css`
    min-width: 80px;
    min-height: 40px;
  `,
  large: css`
    min-width: 100px;
    min-height: 50px;
  `,
};

export const variant: Record<
  ButtonVariantProps,
  (mainColor: string, color: string) => SerializedStyles
> = {
  text: (mainColor) => css`
    background-color: transparent;

    color: ${mainColor};
    border: none;
  `,
  outlined: (mainColor) => css`
    /** 투명 transparent */
    background-color: transparent;
    color: ${mainColor};
    border: 1px solid ${mainColor || mainColor};
  `,
  contained: (mainColor, subColor) => css`
    background-color: ${mainColor};
    color: ${subColor};
    border: none;
  `,
};

const BadgeStyleSheet = {
  size,
  variant,
  rounded,
};

const StyledBadge = styled.button<StyledBadgeProps>`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  gap: 4px;
  font-size: 14px;

  ${({ size }) => BadgeStyleSheet.size[size]}

  ${({ theme, variant, mainColor, subColor }) => css`
    ${BadgeStyleSheet.variant[variant](
      theme.palette.basic[mainColor],
      theme.palette.basic[subColor],
    )}
  `}

  ${() => css`
    ${BadgeStyleSheet.rounded.rect}
  `}
`;

export default StyledBadge;
export { BadgeStyleSheet, StyledBadge };
