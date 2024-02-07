import axiosConfig from '../axiosConfig';

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/post/all',
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (page: number, query?: object) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/api/v1/post/limit`,
        params: {
          page,
          ...query,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetNewestPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/post/newest-posts',
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
