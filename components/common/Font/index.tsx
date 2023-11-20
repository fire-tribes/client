import { CommonFontUI } from '@/components/common/Font/styles';
import type { BasicColorKeys } from '@/styles/palette';
import type { FontSizeKeys, FontWeightKeys } from '@/styles/typography';
import type { CSSProperties, PropsWithChildren } from 'react';
export interface CommonFontProps extends PropsWithChildren {
  fontSize?: FontSizeKeys;
  color?: BasicColorKeys;
  fontWeight?: FontWeightKeys;
  textAlign?: CSSProperties['textAlign'];
  component?: keyof JSX.IntrinsicElements;
  transition?: CSSProperties['transition'];
}

export default function CommonFont({
  fontSize = 'body2',
  fontWeight = 'normal',
  color = 'gray9',
  component = 'span',
  textAlign,
  transition,
  children,
}: CommonFontProps) {
  return (
    <>
      <CommonFontUI.Font
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        as={component}
        transition={transition}
      >
        {children}
      </CommonFontUI.Font>
    </>
  );
}
