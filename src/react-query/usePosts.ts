import { useQuery } from '@tanstack/react-query';
import * as postService from '../services/post';
import queryKeys from './queryKey';
import { Post } from 'src/types';

const fetchPosts = async () => {
  const response = (await postService.apiGetPosts()) as any;
  return response?.data.response;
};

const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: [queryKeys.usePosts],
    queryFn: fetchPosts,
  });
};

export default usePosts;
