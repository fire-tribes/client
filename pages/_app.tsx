import { globalStyle } from '@/styles/global';
import { useEmotionTheme } from '@/hook/useThemeHooks';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import type { AppProps } from 'next/app';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// const muiTheme = createTheme({
//   pal: theme.palette,
// });

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

  const emotionTheme = useEmotionTheme();

  return (
    <>
      <Global styles={globalStyle} />
      <QueryClientProvider client={queryClient}>
        <EmotionThemeProvider theme={emotionTheme}>
          {/* <MuiThemeProvider theme={muiTheme}> */}
          <ReactQueryDevtools />
          <Component {...pageProps} />
          {/* </MuiThemeProvider> */}
        </EmotionThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
