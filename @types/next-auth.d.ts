// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Session } from 'next-auth';

interface CustomSession {
  provider: string;
}

declare module 'next-auth' {
  interface Session extends CustomSession {}
}
