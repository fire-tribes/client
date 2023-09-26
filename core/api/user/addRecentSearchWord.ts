import APIInstance from '@/core/api/instance';

import type { AddRecentSearchWord } from '@/@types/models/addRecentSearchWord';
import type { ResponseSuccess } from '@/@types/models/response';

export const addRecentSearchWordAPI = {
  addRecentSearchWord: (searchWord: string) => {
    return APIInstance.post<ResponseSuccess<AddRecentSearchWord>>(
      `user/recent-search-word`,
      {
        searchWord: searchWord,
      },
    );
  },
};
