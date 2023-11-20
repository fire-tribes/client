type HandleDemicalPointMethod = Math['round'] | Math['floor'] | Math['ceil'];

export const handleDemicalPoint = (
  method: HandleDemicalPointMethod,
  value: number | string,
  point: number,
) => {
  const e = (num: number, point: number) => Number(num + 'e' + point);

  const firstNumber = e(Number(value), point);
  const secondNumber = method(firstNumber);
  const lastNumber = e(secondNumber, -point);
  return lastNumber;
};

export const checkDemicalPointLength = (value: string | number) => {
  if (typeof value === 'number') {
    const rightNumber = value.toString().split('.');
    return rightNumber.length;
  }

  const rightNumber = value.split('.')[1];
  return rightNumber?.length;
};
