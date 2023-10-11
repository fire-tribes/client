import { MonthlyDividends } from '@/@types/models/dividend';

/** 차트에서 사용되는 util 함수, 한국 기준 앞자리만 반환합니다.
 * ex) 9999999 => 999만
 * ex) 999999999 => 9억
 */

export const getShortCurrencyKRByMinusNumber = (value: number) => {
  const TEN_BLIILON = 10000000000;
  const absoluteValue = Math.abs(value);

  if (absoluteValue < 10000) {
    return Math.floor(value).toLocaleString('ko-kr');
  }

  // 1억 미만
  if (absoluteValue < 10000 * 10000) {
    return Math.floor(value / 10000) + '만';
  }

  /** 100억 미만 */
  if (absoluteValue < TEN_BLIILON) {
    return Math.floor(value / (10000 * 10000)) + '억';
  }

  return '99억';
};

export const getShortCurrencyKRByPlusNumber = (value: number) => {
  /** 최대 100억 */
  const TEN_BLIILON = 10000000000;

  if (value <= 0) return 0;

  // 1만 미만
  if (value < 10000) {
    return Math.floor(value).toLocaleString('ko-kr');
  }

  // 1억 미만
  if (value < 10000 * 10000) {
    return Math.floor(value / 10000) + '만';
  }

  /** 100억 미만 */
  if (value < TEN_BLIILON) {
    return Math.floor(value / (10000 * 10000)) + '억';
  }

  return '99억';
};

const createShowChartDividendDatas = (
  dividendDatas: MonthlyDividends | undefined,
) => {
  if (!dividendDatas) return;

  const defaultValue: MonthlyDividends = {
    JANUARY: 0,
    FEBRUARY: 0,
    MARCH: 0,
    APRIL: 0,
    MAY: 0,
    JUNE: 0,
    JULY: 0,
    AUGUST: 0,
    SEPTEMBER: 0,
    OCTOBER: 0,
    NOVEMBER: 0,
    DECEMBER: 0,
  };

  const newValue = { ...defaultValue, ...dividendDatas };
  const showChartDividendDatas = Object.values(newValue).map(
    (value, index) => ({
      month: index + 1,
      dividend: value,
    }),
  );

  return showChartDividendDatas;
};

export {
  // formatChartValue,
  createShowChartDividendDatas,
};

// 차트는 0인 경우 '' 빈 문자열을 보여줘야한다.
// 차트가 아닌 경우에는 toLocaleString(); 같은것들을 통해서 toFixed같은걸 적용해서 99억 이상인 경우에도 보여줘야 한다. 999조 까지만 보여줘야할 것 같다.

export const getShortCurrencyDividendChartKR = (value: number) => {
  /** 최대 100억 */
  const TEN_BLIILON = 10000000000;

  if (value <= 0) return '';

  // 1만 미만
  if (value < 10000) {
    return Math.floor(value).toLocaleString('ko-kr');
  }

  // 1억 미만
  if (value < 10000 * 10000) {
    return Math.floor(value / 10000) + '만';
  }

  /** 100억 미만 */
  if (value < TEN_BLIILON) {
    return Math.floor(value / (10000 * 10000)) + '억';
  }

  return '99억';
};
