/**
 * 생성된 포트폴리오 Response Interface
 */
export interface GetPortfolio {
  /** 포트폴리오 Get 요청 성공 여부 */
  success: boolean;
  /** 포트폴리오 Get 요청 결과 */
  data: {
    /** 생성된 포트폴리오 ID */
    portfolioId: number;
    /** 생성된 포트폴리오 전체 자산 가격 */
    totalValue: number;
    /** 생성된 포트폴리오 전체 자산 등락 */
    totalValueChange: number;
    /** 생성된 포트폴리오 전체 자산 등락율 */
    totalValueChangeRate: number;
    /** 생성된 포트폴리오 개별 자산 세부정보 */
    assetDetails: [
      {
        /** 해당 종목 자산 아이디 */
        assetId: number;
        /** 해당 종목 ticker 코드 */
        tickerCode: string;
        /** 해당 종목 stock 코드 */
        stockCode: string;
        /** 해당 종목 수량 */
        count: number;
        /** 해당 종목 평균 가격 */
        averagePrice: string;
        /** 해당 종목 현재 가격 */
        currentPrice: string;
        /** 해당 종목 등락율 */
        assetPriceChangeRate: string;
        /** 해당 종목 등락 크기*/
        assetPriceChange: string;
        /** 해당 종목 자산 가치 */
        value: number;
        /** 해당 종목 수익률 */
        rateOfReturn: number;
        /** 해당 종목 배당 수익률 */
        dividendPriceRatio: number;
        /** 해당 종목 배당 주기 */
        dividendMonth: number[];
        /** 해당 종목 화폐 단위 */
        currencyType: 'KRW' | 'USD' | 'NONE';
      },
    ];
  };
  /** 포트폴리오 Get 요청 실패 Status Code */
  errorCode: string;
  /** 포트폴리오 Get 요청 실패 원인 Message */
  message: string;
}
