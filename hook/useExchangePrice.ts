/** TODO:
 * toggle이 발생하면 여기에 접근해서 모두 바꿔주자
  currentType가 USD인 경우
  key값에 Value, Price 를 포함하고 있는 것들 중에
  Rate를 제외하고 다 바꿔주는 방법이 있겠네
  키값에 ‘Rate’ 잇는것 제외

  Rate가 붙어이있으면 % 를 붙여준다.
  Value, Price인데 Rate가 없으면 USD인 경우 원화로 변환해주고 원을 붙여준다.
 */

import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { useMyPortFolio } from '@/hook/useMyPortFolio';

export const useExchangePriceAll = () => {
  const { data } = useExchangeRate();
  const { annualDividendData } = useAnnualDividend();
  const { myPortFolioData } = useMyPortFolio();

  data;
  annualDividendData;
  myPortFolioData;

  const exchangeRate = data?.value;
  const inputSymbol = data?.currencyType;

  exchangeRate;
  inputSymbol;
};
