import { useCallback, useState } from 'react';

const useControlModal = () => {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    openModal: useCallback(() => setIsShow(true), []),
    closeModal: useCallback(() => setIsShow(false), []),
  } as const;
};

export default useControlModal;
