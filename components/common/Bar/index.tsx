import { StyledCommonBar } from '@/components/common/Bar/styles';
import type { CSSProperties } from 'react';

export interface CommonBarProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export default function CommonBar({
  width = '100%',
  height = '14px',
}: CommonBarProps) {
  return <StyledCommonBar width={width} height={height} />;
}
