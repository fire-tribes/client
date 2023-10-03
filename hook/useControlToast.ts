import { atom, useAtom } from 'jotai';

export const showToastAtom = atom(false);

const useControlToast = () => {
  const [isShowToast, setIsShowToast] = useAtom(showToastAtom);

  return {
    isShowToast,
    setIsShowToast,
  };
};

export default useControlToast;
