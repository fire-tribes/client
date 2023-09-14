/**
 * @example
 * 16px 기준
 *h1: '1.75rem', // 28px
 *h2: '1.5rem', // 24px
 *h3: '1.25rem', // 20px
 *h4: '1.125rem', // 18px
 *h5: '1.063rem', // 17px
 *body1: '1rem', // 16px
 *body2: '0.938rem', // 15px
 *body3: '0.875rem', // 14px
 *caption: '0.813rem', // 13px
 *caption2: '0.75rem', // 12px
 *caption3: '0.625rem', // 10px
 *caption4: '0.5625rem', // 9px
 */

const fontSize = {
  h1: '1.75rem', // 28px
  h2: '1.5rem', // 24px
  h3: '1.25rem', // 20px
  h4: '1.125rem', // 18px
  h5: '1.063rem', // 17px
  body1: '1rem', // 16px
  body2: '0.938rem', // 15px
  body3: '0.875rem', // 14px
  caption: '0.813rem', // 13px
  caption2: '0.75rem', // 12px\
  caption3: '0.625rem', // 10px
  caption4: '0.5625rem', // default로 minimum이 10px인걸로 알고있습니다.
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
