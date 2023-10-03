import { globalStyle } from '@/styles/global';
import { useEmotionTheme } from '@/hook/useThemeHooks';
import { fontFacePretendard } from '@/styles/fonts';
import { ACCESS_TOKEN } from '@/core/api/token';

import { ResponseSuccess } from '@/@types/models/response';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache({
        onSuccess: (data) => {
          const response = data as AxiosResponse<ResponseSuccess<unknown>>;
          const errorCode = response.data.errorCode;

          if (errorCode === 'E01106') {
            const cookie = new Cookies();
            cookie.remove(ACCESS_TOKEN);
            router.push('/login');
          }
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            console.error(error);
          }
        },
      }),
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false,
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
