import {
  getShortCurrencyKRByMinusNumber,
  getShortCurrencyKRByPlusNumber,
} from '@/components/Chart/utils';
import { useControlMode } from '@/hook/useControlMode';
import { useControlTax } from '@/hook/useControlTax';

export const useFormatPrice = () => {
  const { taxData } = useControlTax();
  const { modeData } = useControlMode();

  const divideByTax = (price: number) =>
    price > 0 ? Math.floor(price * (85 / 100)) : Math.ceil(price * (85 / 100));
  const getByTax = (price: number) => Math.floor(price * (15 / 100));
  const divideSimple = (price: number) =>
    price > 0
      ? getShortCurrencyKRByPlusNumber(Math.floor(price))
      : getShortCurrencyKRByMinusNumber(Math.ceil(price));

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

  /** TODO: Test Code 작성 필요 */
  const getPriceByTaxWithSimple = (price: number) => {
    /** 음수, 양수에 따라 다르게 소수점을 버림 */
    let newPrice = price < 0 ? Math.ceil(price) : Math.floor(price);

    if (taxData.isTax) {
      newPrice = divideByTax(price);
    }

    if (modeData.isSimple) {
      /** divideSimple 내부에서 실행되는 함수에 의해 -0원이 0원으로 변경되어짐 */
      const result = divideSimple(newPrice) + '원';
      return result;
    }

    const result = newPrice === 0 ? 0 : newPrice.toLocaleString('ko-kr');
    /** -0 인 경우 '-0원'을 방지 */
    if (result === 0) {
      return '0원';
    }

    return result + '원';
  };

  const getTaxByPriceWithSimple = (price: number) => {
    let newPrice: number = Math.floor(price);

    if (!taxData.isTax) {
      return '0원';
    }

    if (taxData.isTax) {
      newPrice = getByTax(price);
    }

    if (modeData.isSimple) {
      return divideSimple(newPrice) + '원';
    }

    return newPrice.toLocaleString('ko-kr') + '원';
  };

  const getTaxByPrice = (price: number) => {
    if (taxData.isTax) {
      return getByTax(price).toLocaleString('ko-kr') + '원';
    }
    return '0원';
  };

  return {
    divideByTax,
    divideSimple,
    getByTax,
    getPrice,
    getPriceByTax,
    getPriceBySimple,
    getPriceByTaxWithSimple,
    getTaxByPriceWithSimple,
    getTaxByPrice,
  };
};
