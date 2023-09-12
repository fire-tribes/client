import { CommonFontUI } from '@/components/Font/styles';
import { FontSizeKeys } from '@/styles/typography';
import { PropsWithChildren } from 'react';

interface CommonFontProps extends PropsWithChildren {
  fontSize: FontSizeKeys;
}

export default function CommonFont({
  fontSize = 'body2',
  children,
}: CommonFontProps) {
  return <CommonFontUI.Font fontSize={fontSize}>{children}</CommonFontUI.Font>;
}
