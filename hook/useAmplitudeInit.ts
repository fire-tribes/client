import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

/** AmpliTude Event를 import 하는 방법 */
// import { TrackEvent } from '@amplitude/analytics-types';

const AMPLITUDE_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY as string;

//TODO: 매번 init을 해주지 않으려면 Provider를 만들어서 Context로 해줘야하지 않을까?
export const useAmplitudeInit = () => {
  useEffect(() => {
    // awiat 로 불러오기
    // amplitude = await import("@amplitude/analytics-browser")
    amplitude.init(AMPLITUDE_KEY);
  }, []);

  return {
    amplitude,
  };
};
