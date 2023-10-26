import * as amplitude from '@amplitude/analytics-browser';

/** AmpliTude Event를 import 하는 방법 */
import type { TrackEvent } from '@amplitude/analytics-types';

export const useAmplitudeLogger = () => {
  const eventLogger = (event: TrackEvent) => {
    amplitude.track(event);
  };

  return {
    eventLogger,
  };
};
