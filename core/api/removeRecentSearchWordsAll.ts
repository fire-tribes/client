import APIInstance from '@/core/api/instance';

import type { RemoveRecentSearchWordsAll } from '@/@types/models/removeRecentSearchWordsAll';
import type { ResponseSuccess } from '@/@types/models/response';

export const removeRecentSearchWordsAllAPI = {
  removeRecentSearchWordsAll: () => {
    return APIInstance.post<ResponseSuccess<RemoveRecentSearchWordsAll>>(
      'user/recent-search-word/clear-all',
    );
  },
};
