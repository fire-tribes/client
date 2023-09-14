import { CommonFontUI } from '@/components/Font/styles';
import { BasicColorKeys } from '@/styles/palette';
import { FontSizeKeys } from '@/styles/typography';
import { PropsWithChildren } from 'react';

interface CommonFontProps extends PropsWithChildren {
  fontSize?: FontSizeKeys;
  color?: BasicColorKeys;
}

export default function CommonFont({
  fontSize = 'body2',
  color = 'gray9',
  children,
}: CommonFontProps) {
  return (
    <CommonFontUI.Font fontSize={fontSize} color={color}>
      {children}
    </CommonFontUI.Font>
  );
}
