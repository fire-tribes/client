/**
 * 현재 가격 Response Interface
 */
export interface GetPresentPrice {
  /** 현재 가격 Get 요청 성공 여부 */
  success: boolean;
  /** 현재 가격 Get 요청 결과 */
  data: [
    {
      /** 해당 종목 자산 아이디 */
      assetId: number;
      /** 해당 종목 현재 가격 */
      currentPrice: string;
      /** 해당 종목 화폐 단위 */
      currencyType: 'KRW' | 'USD' | 'NONE';
      /** 해당 종목 현재 가격 검색 시간 */
      accessTime: string;
      /** 해당 종목 대비기호(등락여부) */
      sign: string;
      /** 전일 종가와 당일 현재가의 차이(등락 크기) */
      priceChange: string;
      /** 전일 종가와 당일 현재가의 차이 비율(등락율) */
      priceChangeRate: string;
    },
  ];
  /** 현재 가격 Get 요청 실패 Status Code */
  errorCode: string;
  /** 현재 가격 Get 요청 실패 원인 Message */
  message: string;
}
