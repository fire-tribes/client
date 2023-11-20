import styled from '@emotion/styled';

export type StyledCurrencySwitchOverlayProps = {
  width?: number;
  height?: number;
  left?: number;
};

export const StyledOverlayRectangleToggleSwitch = {
  Background: styled.div`
    background-color: ${({ theme }) =>
      theme.palette.sementic.currency_switch_background};
    border-radius: 6px;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
  Group: styled.div`
    position: relative;
    display: flex;
    gap: 6px;
    padding: 4px;
  `,
  Item: styled.div`
    background-color: transparent;
    padding: 4px;
    z-index: 2;
  `,
  Overlay: styled.div<StyledCurrencySwitchOverlayProps>`
    position: absolute;

    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    left: ${({ left }) => left + 'px'};

    background-color: ${({ theme }) =>
      theme.palette.sementic.currency_switch_overlay};
    border-radius: 4px;

    transition: 0.4s;
  `,
};
