import APIInstance from '@/core/api/instance';

import type { DeleteRecentSearchWord } from '@/@types/models/deleteRecentSearchWord';
import type { ResponseSuccess } from '@/@types/models/response';

export const deleteRecentSearchWordAPI = {
  deleteRecentSearchWord: (searchWord: string) => {
    return APIInstance.delete<ResponseSuccess<DeleteRecentSearchWord>>(
      'user/recent-search-word',
      {
        params: {
          searchWord: searchWord,
        },
      },
    );
  },
};
