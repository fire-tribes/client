import {
  StyledBadge,
  type ButtonSizeProps,
  type ButtonVariantProps,
} from '@/components/common/Badge/styles';

import type { BasicColorKeys } from '@/styles/palette';
import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface CommonBadgeProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantProps;
  size?: ButtonSizeProps;
  mainColor?: BasicColorKeys;
  subColor?: BasicColorKeys;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function CommonBadge({
  children,
  variant = 'outlined',
  type = 'button',
  size = 'small',
  mainColor = 'gray0',
  subColor = 'point_blue02',
  leftIcon,
  rightIcon,
  ...rest
}: CommonBadgeProps) {
  return (
    <StyledBadge
      variant={variant}
      type={type}
      size={size}
      mainColor={mainColor}
      subColor={subColor}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledBadge>
  );
}
