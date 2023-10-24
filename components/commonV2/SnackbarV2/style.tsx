import { css, styled, Snackbar, type SnackbarProps } from '@mui/material';

type MediaStyleProps = { top?: string; bottom?: string };

export const StyledSnackbar = styled(
  (
    props: SnackbarProps & {
      mediaStyleProps: MediaStyleProps;
    },
  ) => <Snackbar {...props} />,
)(
  ({ mediaStyleProps }) => css`
    @media (min-width: 450px) {
      top: ${mediaStyleProps.top && mediaStyleProps.top};
      bottom: ${mediaStyleProps.bottom && mediaStyleProps.bottom};
      width: calc(100% - 20px);
    }
    .css-avvbga-MuiPaper-root-MuiSnackbarContent-root {
      min-width: 100%;
    }
  `,
);
