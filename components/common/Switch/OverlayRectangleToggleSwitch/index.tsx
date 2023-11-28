import CommonFont, { CommonFontProps } from '@/components/common/Font';
import {
  StyledCurrencySwitchOverlayProps,
  StyledOverlayRectangleToggleSwitch,
} from '@/components/common/Switch/OverlayRectangleToggleSwitch/style';
import { MouseEvent, useEffect, useRef, useState } from 'react';

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
  const [styledOverlayProps, setStyledOverlayProps] =
    useState<StyledCurrencySwitchOverlayProps>({});
  const itemRef = useRef<HTMLDivElement>(null);

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick();
  };

  useEffect(() => {
    const newStyledOverlayProps = {
      width: itemRef.current?.clientWidth,
      height: itemRef.current?.clientHeight,
      left: itemRef.current?.offsetLeft,
    };

    setStyledOverlayProps(newStyledOverlayProps);
  }, [activedKey]);

  return (
    <StyledOverlayRectangleToggleSwitch.Background onClick={onClickHandler}>
      <StyledOverlayRectangleToggleSwitch.Group>
        <StyledOverlayRectangleToggleSwitch.Overlay {...styledOverlayProps} />
        {items.map((item) => {
          const isEqualKey = item.key === activedKey;

          return (
            <StyledOverlayRectangleToggleSwitch.Item
              key={item.key}
              ref={isEqualKey ? itemRef : null}
            >
              <CommonFont
                fontWeight="bold"
                color={isEqualKey ? 'gray8' : 'gray6'}
                transition={'0.4s'}
                {...fontProps}
              >
                {item.value}
              </CommonFont>
            </StyledOverlayRectangleToggleSwitch.Item>
          );
        })}
      </StyledOverlayRectangleToggleSwitch.Group>
    </StyledOverlayRectangleToggleSwitch.Background>
  );
}
