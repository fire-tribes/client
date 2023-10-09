import {
  getShortCurrencyKRByMinusNumber,
  getShortCurrencyKRByPlusNumber,
} from '@/components/Chart/utils';
import { useControlMode } from '@/hook/useControlMode';
import { useControlTax } from '@/hook/useControlTax';

export const useFormatPrice = () => {
  const { taxData } = useControlTax();
  const { modeData } = useControlMode();

  const divideByTax = (price: number) => Math.floor(price * (85 / 100));
  const divideSimple = (price: number) =>
    price > 0
      ? getShortCurrencyKRByPlusNumber(Math.floor(price))
      : getShortCurrencyKRByMinusNumber(Math.floor(price));

  const getPrice = (price: number) => {
    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };

  const getPriceByTax = (price: number) => {
    if (taxData.isTax) {
      return divideByTax(price).toLocaleString('ko-kr') + '원';
    }
    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };

  const getPriceBySimple = (price: number) => {
    if (modeData.isSimple) {
      return divideSimple(price) + '원';
    }
    return Math.floor(price).toLocaleString('ko-kr') + '원';
  };

  const getPriceByTaxWithSimple = (price: number) => {
    let newPrice: number = Math.floor(price);

    if (taxData.isTax) {
      newPrice = divideByTax(price);
    }

    if (modeData.isSimple) {
      return divideSimple(newPrice) + '원';
    }

    return newPrice.toLocaleString('ko-kr') + '원';
  };

  return {
    divideByTax,
    divideSimple,
    getPrice,
    getPriceByTax,
    getPriceBySimple,
    getPriceByTaxWithSimple,
  };
};
