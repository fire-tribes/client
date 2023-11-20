import { atom, useAtom } from 'jotai';
import { ReactElement } from 'react';

const modalAtomInitial = {
  isOpen: false,
  content: undefined,
  options: { isBottomSheet: false },
};

const modalAtom = atom<{
  isOpen: boolean;
  content: ReactElement | JSX.Element | undefined;
  options: { isBottomSheet: boolean };
}>(modalAtomInitial);

export const useControlModalV2 = () => {
  const [modalState, setModalState] = useAtom(modalAtom);

  console.log(modalState.content);
  const open = (
    content?: ReactElement | JSX.Element,
    options?: { isBottomSheet: boolean },
  ) =>
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
