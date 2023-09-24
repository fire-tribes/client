/** TODO:
 * toggle이 발생하면 여기에 접근해서 모두 바꿔주자
  currentType가 USD인 경우
  key값에 Value, Price 를 포함하고 있는 것들 중에
  Rate를 제외하고 다 바꿔주는 방법이 있겠네
  키값에 ‘Rate’ 잇는것 제외

  Rate가 붙어이있으면 % 를 붙여준다.
  Value, Price인데 Rate가 없으면 USD인 경우 원화로 변환해주고 원을 붙여준다.
 */

// import { AnnualDividendByIncomeTax } from '@/@types/models/dividend';
// import { useAnnualDividend } from '@/hook/useAnnualDividend';

import { useExchangeRate } from '@/hook/useExchangeRate';
// import { useMyPortFolio } from '@/hook/useMyPortFolio';

// 나는 원본을 받고싶어
// 나는 변형본을 받고싶어
// 근데 옵션을 이거야

type useExchangePriceAllProps = {
  options: {
    isComma: boolean;
    outputSymbol: 'USD' | 'KRW';
    소득세적용: boolean;
  };
};

// // useExchagePriceAllReturnValue = {
//   data: {
//     annualDividend: object,
//     monthlyDividend: object,
//     portFolio: object
//   }
// }

export const useExchangePriceAll = ({ options }: useExchangePriceAllProps) => {
  const { data: exchangeRateData } = useExchangeRate();
  // const { annualDividendData } = useAnnualDividend();
  // const { myPortFolioData } = useMyPortFolio();

  if (options.outputSymbol === 'KRW') {
    // 핸들링해주는 함수
  }

  if (options.isComma) {
    // 콤마부여주는 핸들링 함수
    // toLocaleString('ko')
  }

  // if (options.소득세적용) {
  //   const 소득세적용key값: AnnualDividendByIncomeTax = {
  //     annualDividend: 0,
  //     thisMonthDividend: 0,
  //     dividendChange: 0,
  //   };
  //   // 배당금부분에서 15% 감소 적용
  // }

  const exchageRate = exchangeRateData?.value;
  const inputSymbol = exchangeRateData?.currencyType;

  return {
    exchageRateData: {
      exchageRate,
      inputSymbol,
    },
  };
};
