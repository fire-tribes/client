import { MonthlyDividends } from '@/@types/models/dividend';

/** 현재는 원화를 기준으로 변경만을 지원 */
const formatChartValue = (value: string | number) => {
  const ZERO = 0;
  const MIN_LENGTH = 5;
  const MIDDLE_LENGTH = 7;
  const CHANGE_FONT_SIZE_LENGTH = 8;
  const MAX_LENGTH = 10;

  if (value === ZERO) return '';
  const stringValue = typeof value === 'number' ? value.toString() : value;
  const stringLength = stringValue.length;

  if (stringLength <= MIN_LENGTH) return value;
  if (stringLength <= MIDDLE_LENGTH) {
    return stringValue.substring(0, stringLength - 4) + '만';
  }
  if (stringLength <= CHANGE_FONT_SIZE_LENGTH) {
    // + 폰트사이즈 8px로 변경
    return stringValue.substring(0, stringLength - 4) + '만';
  }
  if (stringLength <= MAX_LENGTH) {
    return stringValue.substring(0, stringLength - 8) + '억';
  }

  return '';
};

/** 차트에서 사용되는 util 함수, 한국 기준 앞자리만 반환합니다.
 * ex) 9999999 => 999만
 * ex) 999999999 => 9억
 */
export const getShortCurrencyKR = (value: number) => {
  /** 최대 100억 */
  const TEN_BLIILON = 10000000000;

  // 음수 또는 0
  if (value <= 0) return '';

  // 1만 미만
  if (value < 10000) {
    return value.toString();
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

export { formatChartValue, createShowChartDividendDatas };
