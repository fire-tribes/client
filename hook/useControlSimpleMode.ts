import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type ModeAtomType = {
  isSimple: boolean | null;
  modeText: '심플모드';
};

// TODO: 다른곳에서 이 atom에 접근을 해야한다면? 따로 root 폴더에 atoms 라는 폴더를 만들어야 하지 않을까요?
const modeAtom = atom<ModeAtomType>({
  isSimple: null,
  modeText: '심플모드',
});

const IS_DETAIL_MODE = 'isDetailMode';
// TODO: mode는 디바이스에 한해서 고정시킬 것인가? 아니면 유저의 계정에 한해서 고정시킬것인가?

export const useControlSimpleMode = () => {
  const [modeData, setModeData] = useAtom(modeAtom);

  const onSimpleMode = () => {
    window.localStorage.removeItem(IS_DETAIL_MODE);
    setModeData((prev) => ({ ...prev, isSimple: true }));
  };

  const offSimpleMode = () => {
    window.localStorage.setItem(IS_DETAIL_MODE, 'true');
    setModeData((prev) => ({ ...prev, isSimple: false }));
  };

  const toggleMode = () => {
    modeData.isSimple ? offSimpleMode() : onSimpleMode();
  };

  useEffect(() => {
    // 첫 로딩
    if (modeData.isSimple === null) {
      const isDetailMode = window.localStorage.getItem(IS_DETAIL_MODE);
      isDetailMode ? offSimpleMode() : onSimpleMode();
    }
  }, []);

  return {
    modeData,
    toggleMode,
  };
};
