import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';
import CommonFont from '@/components/common/Font';
import type { FontSizeKeys } from '@/styles/typography';
import type { CSSProperties, PropsWithChildren } from 'react';

interface CommonCheckButtonProps extends PropsWithChildren {
  gap?: CSSProperties['gap'];
  fontSize: FontSizeKeys;
  isWait: boolean;
  checked: boolean;
  onClick?: () => void;
}

const ICON_NAMES = {
  ON: 'checked',
  OFF: 'checked_none',
};

export default function CommonCheckButton({
  children,
  gap = '4px',
  fontSize,
  isWait,
  checked,
  onClick,
}: CommonCheckButtonProps) {
  const iconName = checked ? ICON_NAMES.ON : ICON_NAMES.OFF;

  const handleOnClick = () => {
    if (isWait) return;

    onClick && onClick();
  };

  return (
    <button onClick={handleOnClick}>
      <FlexBox gap={gap}>
        <CommonIcon iconName={iconName} />
        <CommonFont fontSize={fontSize}>{children}</CommonFont>
      </FlexBox>
    </button>
  );
}
