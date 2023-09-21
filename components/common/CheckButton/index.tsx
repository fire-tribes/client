import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';
import CommonFont from '@/components/common/Font';
import { useOnAndOff } from '@/hook/useOnAndOff';
import type { FontSizeKeys } from '@/styles/typography';
import type { CSSProperties, PropsWithChildren } from 'react';

interface CommonCheckButtonProps extends PropsWithChildren {
  gap?: CSSProperties['gap'];
  fontSize: FontSizeKeys;
}

const ICON_NAMES = {
  ON: 'checked',
  OFF: 'checked_none',
};

export default function CommonCheckButton({
  children,
  gap = '4px',

  fontSize,
}: CommonCheckButtonProps) {
  const { isOn, toggle } = useOnAndOff();
  const iconName = isOn ? ICON_NAMES.ON : ICON_NAMES.OFF;

  return (
    <button onClick={toggle}>
      <FlexBox gap={gap}>
        <CommonIcon iconName={iconName} />
        <CommonFont fontSize={fontSize}>{children}</CommonFont>
      </FlexBox>
    </button>
  );
}
