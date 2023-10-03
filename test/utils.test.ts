import { getShortCurrencyKR } from '../components/Chart/utils';

describe('new test', () => {
  it('-100', () => {
    const result = getShortCurrencyKR(-100);

    expect(result).toBe(0);
  });

  it('0', () => {
    const result = getShortCurrencyKR(0);

    expect(result).toBe(0);
  });

  it('100', () => {
    const result = getShortCurrencyKR(100);

    expect(result).toBe('100');
  });

  it('소수점', () => {
    const result = getShortCurrencyKR(100.1234214);

    expect(result).toBe('100');
  });

  it('1,000', () => {
    const result = getShortCurrencyKR(1000);

    expect(result).toBe('1,000');
  });

  it('9,999', () => {
    const result = getShortCurrencyKR(9999);

    expect(result).toBe('9,999');
  });

  it('1만', () => {
    const result = getShortCurrencyKR(10000);

    expect(result).toBe('1만');
  });

  it('1만3천', () => {
    const result = getShortCurrencyKR(13000);

    expect(result).toBe('1만');
  });

  it('9,999,999', () => {
    const result = getShortCurrencyKR(9999999);

    expect(result).toBe('999만');
  });

  it('99,999,999', () => {
    const result = getShortCurrencyKR(99999999);

    expect(result).toBe('9999만');
  });

  it('1억', () => {
    const result = getShortCurrencyKR(100000000);

    expect(result).toBe('1억');
  });

  it('13억3천', () => {
    const result = getShortCurrencyKR(1330000000);

    expect(result).toBe('13억');
  });

  it('100억 - 1원', () => {
    const result = getShortCurrencyKR(10000000000 - 1);

    expect(result).toBe('99억');
  });

  it('100억', () => {
    const result = getShortCurrencyKR(10000000000);

    expect(result).toBe('99억');
  });

  it('133억3천', () => {
    const result = getShortCurrencyKR(13330000000);

    expect(result).toBe('99억');
  });
});
