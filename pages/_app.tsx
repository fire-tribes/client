import { globalStyle } from '@/styles/global';
import { useEmotionTheme } from '@/hook/useThemeHooks';
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
        },
      },
    }),
  );

  // emotionTheme를 쓸필요가 있나?? mui가 공식적으로 emotion을 지원하니까 provider가 중첩되기에 발생하는 묹는 어떻게세보면 당연한거아닐까?>
  const theme = useEmotionTheme();
  const muiTheme = createTheme(theme);

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
