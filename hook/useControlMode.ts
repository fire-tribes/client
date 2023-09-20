import { atom, useAtom } from 'jotai';

type ModeAtomType = {
  isSimple: boolean;
  modeText: '심플모드';
};

// TODO: 다른곳에서 이 atom에 접근을 해야한다면? 따로 root 폴더에 atoms 라는 폴더를 만들어야 하지 않을까요?
const modeAtom = atom<ModeAtomType>({
  isSimple: true,
  modeText: '심플모드',
});

// TODO: mode는 디바이스에 한해서 고정시킬 것인가? 아니면 유저의 계정에 한해서 고정시킬것인가?

export const useControlMode = () => {
  const [modeData, setModeData] = useAtom(modeAtom);
  const toggleMode = () =>
    setModeData((prev) => ({ ...prev, isSimple: !prev.isSimple }));

  return {
    modeData,
    toggleMode,
  };
};
