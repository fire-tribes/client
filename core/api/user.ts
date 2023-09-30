import APIInstance from '@/core/api/instance';

import type { AddRecentSearchWord } from '@/@types/models/addRecentSearchWord';
import type { DeleteRecentSearchWord } from '@/@types/models/deleteRecentSearchWord';
import type { GetRecentSearchWords } from '@/@types/models/getRecentSearchWords';
import type { RemoveRecentSearchWordsAll } from '@/@types/models/removeRecentSearchWordsAll';

import type { ResponseSuccess } from '@/@types/models/response';

export const userAPI = {
  addRecentSearchWord: (searchWord: string) => {
    return APIInstance.post<ResponseSuccess<AddRecentSearchWord>>(
      `user/recent-search-word?searchWord=${searchWord}`,
    );
  },
  deleteRecentSearchWord: (searchWord: string) => {
    return APIInstance.delete<ResponseSuccess<DeleteRecentSearchWord>>(
      `user/recent-search-word?searchWord=${searchWord}`,
    );
  },
  getRecentSearchWords: () => {
    return APIInstance.get<ResponseSuccess<GetRecentSearchWords[]>>(
      'user/recent-search-word/list',
      {
        params: {
          size: 10,
        },
      },
    );
  },
  removeRecentSearchWordsAll: () => {
    return APIInstance.post<ResponseSuccess<RemoveRecentSearchWordsAll>>(
      'user/recent-search-word/clear-all',
    );
  },
};
