import { StyledHeader } from '@/components/common/Header/styles';
import type { PropsWithChildren } from 'react';

interface CommonHeaderProps extends PropsWithChildren {}

export default function CommonHeader({ children }: CommonHeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}
