import { StyledPadding } from '@/components/commonV2/Padding/style';
import type { CSSProperties, PropsWithChildren } from 'react';

interface PaddingProps extends PaddingStyledProps, PropsWithChildren {}

export interface PaddingStyledProps {
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingLeft?: CSSProperties['paddingLeft'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingBottom?: CSSProperties['paddingBottom'];
}

export default function Padding({ children, ...styledProps }: PaddingProps) {
  return <StyledPadding {...styledProps}>{children}</StyledPadding>;
}
