import { useQuery } from '@tanstack/react-query';
import { Area } from 'src/types';
import * as areaService from '../services/area';
import queryKeys from './queryKey';

const fetchAreas = async () => {
  const response = (await areaService.apiGetAreas()) as any;
  return response?.data.response;
};

const useAreas = () => {
  return useQuery<Area[]>({
    queryKey: [queryKeys.useAreas],
    queryFn: fetchAreas,
  });
};

export default useAreas;
