import { atom, useAtom } from 'jotai';
import { ReactNode, useCallback, useState } from 'react';

const useControlModal = () => {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    openModal: useCallback(() => setIsShow(true), []),
    closeModal: useCallback(() => setIsShow(false), []),
  } as const;
};

export default useControlModal;

const modalAtomInitial = {
  isOpen: false,
  content: null,
  options: { isBottomSheet: false },
};

const modalAtom = atom<{
  isOpen: boolean;
  content: ReactNode;
  options: { isBottomSheet: boolean };
}>(modalAtomInitial);

export const useControlModalV2 = () => {
  const [modalState, setModalState] = useAtom(modalAtom);

  const open = (content?: ReactNode, options?: { isBottomSheet: boolean }) =>
    setModalState({
      isOpen: true,
      content,
      options: options ? options : modalAtomInitial.options,
    });
  const close = () => setModalState(() => ({ ...modalAtomInitial }));

  return {
    modalState,
    open,
    close,
  };
};
