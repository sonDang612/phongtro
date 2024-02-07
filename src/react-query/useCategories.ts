import { useQuery } from '@tanstack/react-query';
import { Category } from 'src/types';
import * as categoryService from '../services/category';
import queryKeys from './queryKey';

const fetchCategories = async () => {
  const response = (await categoryService.apiGetCategories()) as any;
  return response.data.response;
};

const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: [queryKeys.useCategories],
    queryFn: () => fetchCategories(),
  });
};

export default useCategories;
