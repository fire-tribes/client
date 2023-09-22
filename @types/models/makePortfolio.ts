/**
 * 포트폴리오 생성 Response Interface
 */
export interface MakePortfolio {
  /** 포트폴리오 생성 Post 요청 성공 유무 */
  success: true;
  /** 포트폴리오 생성 Post 요청 결과 */
  data: {
    /** 생성된 포트폴리오 ID */
    portfolioId: number;
    /** 생성된 포트폴리오 사용자 ID */
    userId: number;
  };
  /** 포트폴리오 생성 Post 요청 실패 Status Code */
  errorCode: string;
  /** 포트폴리오 생성 Post 요청 실패 원인 Message */
  message: string;
}
