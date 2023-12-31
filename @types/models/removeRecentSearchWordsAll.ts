/**
 * 삭제할 최근 검색어 전체 목록 Response Interface
 * Request Method가 Post이므로, Delete가 아닌 Remove라는 이름을 사용했습니다.
 */
export interface RemoveRecentSearchWordsAll {
  /** 전체 최근 검색어 초기화 Post 요청 결과 */
  data: boolean;
}
