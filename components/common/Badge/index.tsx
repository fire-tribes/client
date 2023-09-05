import BadgeStyleSheet from '@/components/common/Badge/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type ButtonVariantProps = 'text' | 'outlined' | 'contained';
type ButtonSizeProps = 'small' | 'medium' | 'large';

interface CommonBadgeProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantProps;
  size?: ButtonSizeProps;
  mainColor?: string;
  subColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function CommonBadge({
  children,
  variant = 'outlined',
  type = 'button',
  size = 'small',
  mainColor = 'blue',
  subColor = 'white',
  leftIcon,
  rightIcon,
}: CommonBadgeProps) {
  return (
    <StyledBadge
      variant={variant}
      type={type}
      size={size}
      mainColor={mainColor}
      subColor={subColor}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledBadge>
  );
}

type StyledBadgeProps = Required<
  Pick<CommonBadgeProps, 'size' | 'variant' | 'mainColor' | 'subColor'>
>;

const StyledBadge = styled.button<StyledBadgeProps>`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  // size
  ${({ size }) => BadgeStyleSheet.size[size]}

  // variant
  ${({
    // theme,
    variant,
    mainColor,
    subColor,
  }) => css`
    ${BadgeStyleSheet.variant[variant](mainColor, subColor)}
  `}

  ${() => css`
    ${BadgeStyleSheet.rounded.rect}
  `}
`;
