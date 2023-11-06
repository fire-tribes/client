import CommonFont, { CommonFontProps } from '@/components/common/Font';
import { StyledOverlayRectangleToggleSwitch } from '@/components/common/Switch/OverlayRectangleToggleSwitch/style';
import { MouseEvent, useEffect, useState } from 'react';

const LEFT_ATTRIBUTES = [
  {
    left: '4px',
  },
  {
    left: '50% + 3px',
  },
];

interface OverlayRectangleToggleSwitchProps {
  onClick: () => void;
  activedKey: string;
  items: { key: string; value: string }[];
  fontProps?: CommonFontProps;
}

export default function OverlayRectangleToggleSwitch({
  onClick,
  activedKey,
  items,
  fontProps,
}: OverlayRectangleToggleSwitchProps) {
  const [activedItemIndex, setActivedItemIndex] = useState(0);

  useEffect(() => {
    const activedIndex = items.findIndex(({ key }) => activedKey === key);
    setActivedItemIndex(activedIndex);
  }, [activedKey]);

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <StyledOverlayRectangleToggleSwitch.Background onClick={onClickHandler}>
      <StyledOverlayRectangleToggleSwitch.Group>
        <StyledOverlayRectangleToggleSwitch.Overlay
          {...LEFT_ATTRIBUTES[activedItemIndex]}
        />
        {items.map((item) => (
          <StyledOverlayRectangleToggleSwitch.Item key={item.key}>
            <CommonFont
              fontWeight="bold"
              color={item.key === activedKey ? 'gray8' : 'gray6'}
              transition={'0.2s color'}
              {...fontProps}
            >
              {item.value}
            </CommonFont>
          </StyledOverlayRectangleToggleSwitch.Item>
        ))}
      </StyledOverlayRectangleToggleSwitch.Group>
    </StyledOverlayRectangleToggleSwitch.Background>
  );
}
