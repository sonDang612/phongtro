import { useQuery } from '@tanstack/react-query';
import * as postService from '../services/post';
import queryKeys from './queryKey';
import { Post } from 'src/types';

const fetchPostsLimit = async (page: number) => {
  const response = (await postService.apiGetPostsLimit(page)) as any;
  return {
    data: response.data.response.rows,
    totalPages: response.data.totalPages,
  };
};

const usePostsLimit = ({ page }: { page: number }) => {
  return useQuery<{ data: Post[]; totalPages: number }>({
    queryKey: [queryKeys.usePostsLimit, { page }],
    queryFn: () => fetchPostsLimit(page),
  });
};

export default usePostsLimit;
