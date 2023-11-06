import styled from '@emotion/styled';
import { CSSProperties } from 'react';

type StyledCurrencySwitchOverlayProps = {
  left: CSSProperties['left'];
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
    width: calc(50% - 9px);
    height: calc(100% - 8px);
    left: ${({ left }) => `calc(${left})`};

    background-color: ${({ theme }) =>
      theme.palette.sementic.currency_switch_overlay};
    border-radius: 4px;

    transition: 0.4s left;
  `,
};
