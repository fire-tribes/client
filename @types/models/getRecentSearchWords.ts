/**
 * 가져올 최근 검색어 목록 Response Interface
 */
export interface GetRecentSearchWords {
  /** 최근 검색어 Get 요청 성공 유무 */
  success: boolean;
  /** 최근 검색어 Get 요청 결과 */
  data: [
    {
      /** 검색어 워딩 */
      word: string;
      /** 해당 검색어를 검색한 날짜 */
      date: string;
    },
  ];
  /** 최근 검색어 Get 요청 실패 Status Code */
  errorCode: string;
  /** 최근 검색어 Get 요청 실패 원인 Message */
  message: string;
}
