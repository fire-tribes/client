import { globalStyle } from '@/styles/global';
import { useEmotionTheme } from '@/hook/useThemeHooks';
import { fontFacePretendard } from '@/styles/fonts';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false,
          // staleTime: 10 * 1000,
        },
      },
    }),
  );

  const theme = useEmotionTheme();
  const muiTheme = createTheme({
    ...theme,
    typography: {
      fontFamily: 'Pretendard',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `${fontFacePretendard}`,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider>
          <MuiThemeProvider theme={muiTheme}>
            <EmotionThemeProvider theme={muiTheme}>
              <Global styles={globalStyle} />
              <ReactQueryDevtools />
              <Component {...pageProps} />
            </EmotionThemeProvider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
