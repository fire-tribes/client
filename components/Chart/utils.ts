const formatChartValue = (value: string | number) => {
  const ZERO = 0;
  const MIN_LENGTH = 4;
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

const dividends = Array.from({ length: 12 }, (_, index) => ({
  month: index + 1,
  dividend: 0,
}));

export { dividends, formatChartValue };
