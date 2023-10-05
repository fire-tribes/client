import { getShortCurrencyKR } from '@/components/Chart/utils';
import { useControlMode } from '@/hook/useControlMode';
import { useControlTax } from '@/hook/useControlTax';

export const useFormatPrice = () => {
  const { taxData } = useControlTax();
  const { modeData } = useControlMode();

  const divideByTax = (price: number) => Math.floor(price * (85 / 100));
  const divideSimple = (price: number) => getShortCurrencyKR(Math.floor(price));

  const getPriceByTax = (price: number) => {
    if (taxData.isTax) {
      return divideByTax(price).toLocaleString('ko-kr') + '원';
    }

    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };
  const getPrice = (price: number) => {
    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };

  const getPriceBySimple = (price: number) => {
    if (modeData.isSimple) {
      return divideSimple(price) + '원';
    }

    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };

  return {
    divideByTax,
    divideSimple,
    getPrice,
    getPriceByTax,
    getPriceBySimple,
  };
};
