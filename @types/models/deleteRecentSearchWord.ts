/**
 * 삭제할 최근 검색어 특정 객체 Response Interface
 * Request Method가 Delete이므로, Remove가 아닌 Delete라는 이름을 사용했습니다.
 */
export interface DeleteRecentSearchWord {
  /** 특정 최근 검색어 Delete 요청 결과 */
  data: boolean;
}
