import APIInstance from '@/core/api/instance';

import type { GetSearchedResults } from '@/@types/models/getSearchedResults';
import type { ResponseSuccess } from '@/@types/models/response';

export const getSearchedResultsAPI = {
  getSearchedResults: (word: string, pageIndex: number = 1) => {
    return APIInstance.get<ResponseSuccess<GetSearchedResults>>('asset/find', {
      params: {
        category: 'STOCK',
        word: word,
        pageIndex: pageIndex,
        pageSize: 10,
      },
    });
  },
};
