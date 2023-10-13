import {
  getShortCurrencyKRByPlusNumber,
  getShortCurrencyDividendChartKR,
} from '../components/Chart/utils';

describe('getShortCurrencyKRByPlusNumber', () => {
  it('-100', () => {
    const result = getShortCurrencyKRByPlusNumber(-100);

    expect(result).toBe(0);
  });

  it('0', () => {
    const result = getShortCurrencyKRByPlusNumber(0);

    expect(result).toBe(0);
  });

  it('100', () => {
    const result = getShortCurrencyKRByPlusNumber(100);

    expect(result).toBe('100');
  });

  it('소수점', () => {
    const result = getShortCurrencyKRByPlusNumber(100.1234214);

    expect(result).toBe('100');
  });

  it('1,000', () => {
    const result = getShortCurrencyKRByPlusNumber(1000);

    expect(result).toBe('1,000');
  });

  it('9,999', () => {
    const result = getShortCurrencyKRByPlusNumber(9999);

    expect(result).toBe('9,999');
  });

  it('1만', () => {
    const result = getShortCurrencyKRByPlusNumber(10000);

    expect(result).toBe('1만');
  });

  it('1만3천', () => {
    const result = getShortCurrencyKRByPlusNumber(13000);

    expect(result).toBe('1만');
  });

  it('9,999,999', () => {
    const result = getShortCurrencyKRByPlusNumber(9999999);

    expect(result).toBe('999만');
  });

  it('99,999,999', () => {
    const result = getShortCurrencyKRByPlusNumber(99999999);

    expect(result).toBe('9999만');
  });

  it('1억', () => {
    const result = getShortCurrencyKRByPlusNumber(100000000);

    expect(result).toBe('1억');
  });

  it('13억3천', () => {
    const result = getShortCurrencyKRByPlusNumber(1330000000);

    expect(result).toBe('13억');
  });

  it('100억 - 1원', () => {
    const result = getShortCurrencyKRByPlusNumber(10000000000 - 1);

    expect(result).toBe('99억');
  });

  it('100억', () => {
    const result = getShortCurrencyKRByPlusNumber(10000000000);

    expect(result).toBe('99억');
  });

  it('133억3천', () => {
    const result = getShortCurrencyKRByPlusNumber(13330000000);

    expect(result).toBe('99억');
  });
});

describe('getShortCurrencyKRByPlusNumber', () => {
  it('-100', () => {
    const result = getShortCurrencyDividendChartKR(-100);

    // '' 빈문자열을 반환해야한다.
    expect(result).toBe('');
  });

  it('0', () => {
    const result = getShortCurrencyDividendChartKR(0);

    expect(result).toBe('');
  });

  it('100', () => {
    const result = getShortCurrencyDividendChartKR(100);

    expect(result).toBe('100');
  });

  it('소수점', () => {
    const result = getShortCurrencyDividendChartKR(100.1234214);

    expect(result).toBe('100');
  });

  it('1,000', () => {
    const result = getShortCurrencyDividendChartKR(1000);

    expect(result).toBe('1,000');
  });

  it('9,999', () => {
    const result = getShortCurrencyDividendChartKR(9999);

    expect(result).toBe('9,999');
  });

  it('1만', () => {
    const result = getShortCurrencyDividendChartKR(10000);

    expect(result).toBe('1만');
  });

  it('1만3천', () => {
    const result = getShortCurrencyDividendChartKR(13000);

    expect(result).toBe('1만');
  });

  it('9,999,999', () => {
    const result = getShortCurrencyDividendChartKR(9999999);

    expect(result).toBe('999만');
  });

  it('99,999,999', () => {
    const result = getShortCurrencyDividendChartKR(99999999);

    expect(result).toBe('9999만');
  });

  it('1억', () => {
    const result = getShortCurrencyDividendChartKR(100000000);

    expect(result).toBe('1억');
  });

  it('13억3천', () => {
    const result = getShortCurrencyDividendChartKR(1330000000);

    expect(result).toBe('13억');
  });

  it('100억 - 1원', () => {
    const result = getShortCurrencyDividendChartKR(10000000000 - 1);

    expect(result).toBe('99억');
  });

  it('100억', () => {
    const result = getShortCurrencyDividendChartKR(10000000000);

    expect(result).toBe('99억');
  });

  it('133억3천', () => {
    const result = getShortCurrencyDividendChartKR(13330000000);

    expect(result).toBe('99억');
  });
});
