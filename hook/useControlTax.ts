import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type TaxAtomType = {
  isTax: boolean | null;
  modeText: '소득세';
};

// TODO: 다른곳에서 이 atom에 접근을 해야한다면? 따로 root 폴더에 atoms 라는 폴더를 만들어야 하지 않을까요?
const taxAtom = atom<TaxAtomType>({
  isTax: null,
  modeText: '소득세',
});

const IS_TAX = 'isTax';
// TODO: tax는 디바이스에 한해서 고정시킬 것인가? 아니면 유저의 계정에 한해서 고정시킬것인가?

export const useControlTax = () => {
  const [taxData, setTaxData] = useAtom(taxAtom);

  const onTax = () => {
    window.localStorage.setItem(IS_TAX, 'true');
    setTaxData((prev) => ({ ...prev, isTax: true }));
  };

  const offTax = () => {
    window.localStorage.removeItem(IS_TAX);
    setTaxData((prev) => ({ ...prev, isTax: false }));
  };

  const toggleTax = () => {
    taxData.isTax ? offTax() : onTax();
  };

  useEffect(() => {
    // 첫 로딩
    if (taxData.isTax === null) {
      const isTax = window.localStorage.getItem(IS_TAX);
      isTax ? onTax() : offTax();
    }
  }, []);

  return {
    taxData,
    toggleTax,
  };
};
