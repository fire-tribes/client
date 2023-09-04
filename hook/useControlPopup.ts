import { useCallback, useState } from 'react';

const useControlPopup = () => {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    openPopup: useCallback(() => setIsShow(true), []),
    closePopup: useCallback(() => setIsShow(false), []),
  } as const;
};

export default useControlPopup;
