import { useQuery } from '@tanstack/react-query';
import { Price } from 'src/types';
import * as priceService from '../services/price';
import queryKeys from './queryKey';

const fetchPrices = async () => {
  const response = (await priceService.apiGetPrices()) as any;
  return response?.data.response;
};

const usePrices = () => {
  return useQuery<Price[]>({
    queryKey: [queryKeys.usePrices],
    queryFn: fetchPrices,
  });
};

export default usePrices;
