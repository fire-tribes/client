import { SnackbarProps } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const snackbarAtomDefault: SnackbarProps = {
  open: false,
  message: null,
  autoHideDuration: undefined,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
};

const snackbarAtom = atom<SnackbarProps>(snackbarAtomDefault);

export const useControlSnackbarV2 = () => {
  const [snackbarState, setSnackbarState] = useAtom(snackbarAtom);

  const openSnackbar = (options: SnackbarProps) => {
    setSnackbarState((pre) => ({ ...pre, ...options, open: true }));
  };
  const closeSnackbar = () => {
    setSnackbarState((pre) => ({ ...pre, open: false }));
  };

  const resetSnackbar = () => {
    setSnackbarState({ ...snackbarAtomDefault });
  };

  useEffect(() => {
    return () => resetSnackbar();
  }, []);

  return {
    snackbarState,
    openSnackbar,
    closeSnackbar,
  };
};
