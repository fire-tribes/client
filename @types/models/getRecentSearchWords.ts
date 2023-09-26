/**
 * 가져올 최근 검색어 목록 Response Interface
 */
export interface GetRecentSearchWords {
  /** 검색어 워딩 */
  word: string;
  /** 해당 검색어를 검색한 날짜 */
  date: string;
}
