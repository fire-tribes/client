type HandleDecimalPointMethod = Math['round'] | Math['floor'] | Math['ceil'];

export const handleDecimalPoint = (
  method: HandleDecimalPointMethod,
  value: number | string,
  point: number,
) => {
  const e = (num: number, point: number) => Number(num + 'e' + point);

  const firstNumber = e(Number(value), point);
  const secondNumber = method(firstNumber);
  const lastNumber = e(secondNumber, -point);
  return lastNumber;
};

export const checkDecimalPointLength = (value: string | number) => {
  if (typeof value === 'number') {
    const rightNumber = value.toString().split('.');
    return rightNumber.length;
  }

  const rightNumber = value.split('.')[1];
  return rightNumber?.length;
};
