import Head from 'next/head';

export interface HeadMetaProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function HeadMeta({
  title = '스노우볼',
  description = '주식 배당을 한눈에 모아서 관리할 수 있는 서비스입니다.',
  url = 'https://fire-tribes.vercel.app',
  image = '/snowball_icon-512x512.png',
}: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="스노우볼" />
    </Head>
  );
}
