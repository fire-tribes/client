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
