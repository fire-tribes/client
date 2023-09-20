import { useState } from 'react';

export const useOnAndOff = (initial: boolean = false) => {
  const [isOn, setIsOn] = useState(initial);

  const on = () => setIsOn(true);
  const off = () => setIsOn(false);
  const toggle = () => setIsOn(!isOn);

  return {
    isOn,
    on,
    off,
    toggle,
  };
};
