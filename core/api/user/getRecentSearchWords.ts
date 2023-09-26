import APIInstance from '@/core/api/instance';

import type { GetRecentSearchWords } from '@/@types/models/getRecentSearchWords';
import type { ResponseSuccess } from '@/@types/models/response';

export const getRecentSearchWordsAPI = {
  getRecentSearchWords: () => {
    return APIInstance.get<ResponseSuccess<GetRecentSearchWords>>(
      'user/recent-search-word/list',
      {
        params: {
          size: 10,
        },
      },
    );
  },
};
