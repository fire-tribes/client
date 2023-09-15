import { KakaoSDK } from '@/components/oauth/KakaoSDK';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <KakaoSDK />
      </body>
    </Html>
  );
}
