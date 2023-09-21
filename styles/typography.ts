const fontSize = {
  /**  28px */
  h1: '1.75rem',
  /**  24px */
  h2: '1.5rem',
  /**  20px */
  h3: '1.25rem',
  /**  18px */
  h4: '1.125rem',
  /**  17px */
  h5: '1.063rem',
  /**  16px */
  body1: '1rem',
  /**  15px */
  body2: '0.938rem',
  /**  14px */
  body3: '0.875rem',
  /**  13px */
  caption: '0.813rem',
  /**  12px */
  caption2: '0.75rem',
  /**  10px */
  caption3: '0.625rem',
  /**  default로 minimum이 10px인걸로 알고있습니다. */
  caption4: '0.5625rem',
} as const;

const fontWeight = {
  regular: 400,
  normal: 500,
  bold: 700,
};

type FontSizeKeys = keyof typeof fontSize;
type FontWeightKeys = keyof typeof fontWeight;

export { fontSize, fontWeight };
export type { FontSizeKeys, FontWeightKeys };
