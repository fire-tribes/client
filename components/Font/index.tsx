import { CommonFontUI } from '@/components/Font/styles';
import type { BasicColorKeys } from '@/styles/palette';
import type { FontSizeKeys, FontWeightKeys } from '@/styles/typography';
import type { PropsWithChildren } from 'react';

export interface CommonFontProps extends PropsWithChildren {
  fontSize?: FontSizeKeys;
  color?: BasicColorKeys;
  fontWeight?: FontWeightKeys;
}

export default function CommonFont({
  fontSize = 'body2',
  color = 'gray9',
  fontWeight = 'normal',
  children,
}: CommonFontProps) {
  return (
    <CommonFontUI.Font
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </CommonFontUI.Font>
  );
}
