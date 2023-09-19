import { StyledCenter } from '@/components/common/Center/styles';
import { PropsWithChildren } from 'react';

export default function CommonCenter({ children }: PropsWithChildren) {
  return <StyledCenter>{children}</StyledCenter>;
}
