const colors = {
  white: '#f2f2f2',
} as const;

const theme = {
  colors,
};

export type Colors = keyof typeof theme.colors;

export default theme;
