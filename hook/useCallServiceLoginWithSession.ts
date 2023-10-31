import { useOauthLoginMutaion } from '@/hook/useQueryHook/useOauthLoginMutation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

export type SignAPIParams = {
  email: string;
  provider: 'kakao' | 'google';
};

export const useCallServiceLoginWithSession = () => {
  const router = useRouter();
  const { start } = router.query as { start?: string };
  const session = useSession();
  const { mutate } = useOauthLoginMutaion();

  useEffect(() => {
    const { status, data } = session;

    const email = data?.user?.email;
    const provider = data?.provider;

    if (status === 'authenticated' && email && start) {
      if (provider === 'kakao' || provider === 'google') {
        mutate({ email, provider });
        return;
      }
    }
  }, [mutate, session, start]);
};
