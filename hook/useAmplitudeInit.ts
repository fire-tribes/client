import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

/** AmpliTude Event를 import 하는 방법 */
// import { TrackEvent } from '@amplitude/analytics-types';

const AMPLITUDE_PRODUCT_KEY = process.env
  .NEXT_PUBLIC_AMPLITUDE_PRODUCT_API_KEY as string;
const AMPLITUDE_DEV_KEY = process.env
  .NEXT_PUBLIC_AMPLITUDE_DEV_API_KEY as string;

//TODO: 매번 init을 해주지 않으려면 Provider를 만들어서 Context로 해줘야하지 않을까?
export const useAmplitudeInit = () => {
  useEffect(() => {
    const origin = window.location.origin;

    if (process.env.NEXT_PUBLIC_LOCAL_SERVER_ORIGIN === origin) {
      amplitude.init(AMPLITUDE_DEV_KEY, {
        defaultTracking: true,
      });

      return;
    }

    if (process.env.NEXT_PUBLIC_DEV_SERVER_ORIGIN === origin) {
      amplitude.init(AMPLITUDE_DEV_KEY, {
        defaultTracking: true,
      });

      return;
    }

    if (process.env.NEXT_PUBLIC_PRODUCT_SERVER_ORIGIN === origin) {
      amplitude.init(AMPLITUDE_PRODUCT_KEY, {
        defaultTracking: true,
      });

      return;
    }
  }, []);

  return {
    amplitude,
  };
};
