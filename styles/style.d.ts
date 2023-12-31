import { basic, sementic } from '@/styles/palette';
import { fontSize, fontWeight } from '@/styles/typography';
import '@emotion/react';

type LightPaletteSementic = typeof sementic.light;
type DarkPaletteSementic = typeof sementic.dark;

export type CustomTheme = {
  font: {
    size: typeof fontSize;
    weight: typeof fontWeight;
  };
  fontSize: typeof fontSize;
  palette: {
    basic: typeof basic;
    sementic: LightPaletteSementic | DarkPaletteSementic;
  };
};

type CustomPalette = {
  basic: typeof basic;
  sementic: LightPaletteSementic | DarkPaletteSementic;
};

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

declare module '@mui/material/styles' {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
