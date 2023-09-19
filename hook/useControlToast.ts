import { useCallback, useState } from 'react';

const useControlToast = () => {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    openToast: useCallback(() => setIsShow(true), []),
  } as const;
};

export default useControlToast;
