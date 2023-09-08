import { SerializedStyles, css } from '@emotion/react';

const rounded = {
  rect: css`
    border-radius: 1.25em;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

const size = {
  small: css`
    min-width: 67px;
    min-height: 36px;
    padding: 8px 10px;
  `,
  medium: css`
    min-width: 80px;
    min-height: 40px;
  `,
  large: css`
    min-width: 100px;
    min-height: 50px;
  `,
};

type VariantKey = 'text' | 'outlined' | 'contained';

export const variant: Record<
  VariantKey,
  (mainColor: string, color: string) => SerializedStyles
> = {
  text: (mainColor) => css`
    background-color: transparent;

    color: ${mainColor};
    border: none;
  `,
  outlined: (mainColor) => css`
    // 투명
    background-color: transparent;
    color: ${mainColor};
    border: 1px solid ${mainColor || mainColor};
  `,
  contained: (mainColor, subColor) => css`
    background-color: ${mainColor};
    color: ${subColor};
    border: none;
  `,
};

const BadgeStyleSheet = {
  size,
  variant,
  rounded,
};

export default BadgeStyleSheet;

/**
 *
 * mainColor : bagcround, outline, font
 * subColor
 */
