import { productServerHostname } from '@/core/api/instance';
import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_PRODUCT_KEY = process.env
  .NEXT_PUBLIC_AMPLITUDE_PRODUCT_API_KEY as string;
const AMPLITUDE_DEV_KEY = process.env
  .NEXT_PUBLIC_AMPLITUDE_DEV_API_KEY as string;

//TODO: 매번 init을 해주지 않으려면 Provider를 만들어서 Context로 해줘야하지 않을까?
export const useAmplitudeInit = () => {
  useEffect(() => {
    const currentUrlHostname = window.location.hostname;

    if (currentUrlHostname === productServerHostname) {
      amplitude.init(AMPLITUDE_PRODUCT_KEY, {
        defaultTracking: true,
      });

      return;
    }

    amplitude.init(AMPLITUDE_DEV_KEY, {
      defaultTracking: true,
    });

    return;
  }, []);

  return {
    amplitude,
  };
};
