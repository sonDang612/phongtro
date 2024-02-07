import { useQuery } from '@tanstack/react-query';
import * as postService from '../services/post';
import queryKeys from './queryKey';
import { Post } from 'src/types';

const fetchPostsLimit = async (page: number, query?: object) => {
  const response = (await postService.apiGetPostsLimit(page, query)) as any;
  return {
    data: response.data.response.rows,
    totalPages: response.data.totalPages,
  };
};

const usePostsLimit = ({ page, query }: { page: number; query?: object }) => {
  return useQuery<{ data: Post[]; totalPages: number }>({
    queryKey: [queryKeys.usePostsLimit, { page, ...query }],
    queryFn: () => fetchPostsLimit(page, query),
  });
};

export default usePostsLimit;
