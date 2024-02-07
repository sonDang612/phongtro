import { useQuery } from '@tanstack/react-query';
import * as postService from '../services/post';
import queryKeys from './queryKey';
import { Post } from 'src/types';

const fetchNewestPosts = async () => {
  const response = (await postService.apiGetNewestPosts()) as any;
  return response?.data.response.rows;
};

const useNewestPosts = () => {
  return useQuery<Post[]>({
    queryKey: [queryKeys.useNewestPosts],
    queryFn: fetchNewestPosts,
  });
};

export default useNewestPosts;
