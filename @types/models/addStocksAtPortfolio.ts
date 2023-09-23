/**
 * 포트폴리오에 자산 추가 Response Interface
 * Post Method의 경우, 구체적인 동사 사용
 */
export interface AddStocksAtPortfolio {
  /** 자산 추가 Post 요청 성공 여부 */
  success: boolean;
  /** 자산 추가 Post 요청 결과 */
  data: [
    {
      /** 포트폴리오에 추가된 자산 ID */
      portfolioAssetId: number;
      /** 포트폴리오에 추가된 자산 수량 */
      count: number;
      /** 포트폴리오에 추가된 자산 가격 */
      purchasePrice: number;
      /** 포트폴리오에 추가된 자산 화폐 단위 */
      currencyType: 'KRW' | 'USD' | 'NONE';
      /** 해당 종목 자산 아이디 */
      assetId: number;
    },
  ];
  /** 자산 추가 Post 요청 실패 Status Code */
  errorCode: string;
  /** 자산 추가 Post 요청 실패 원인 Message */
  message: string;
}
