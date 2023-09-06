import APIInstance from '@/core/api/instance';

export const exampleItemAPI = {
  getItem: (params: { title: string }) => {
    return APIInstance.get('example/getItem', { params });
  },
  deleteItem: (params: { title: string }) => {
    return APIInstance.delete('example/getItem', { params });
  },
};
