import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const PAGE_PARAM = 'page';
//export const QUERY_PARAM = 'q';
export const SORT_PARAM = 'sort';
export const NUMBER_PR_PAGE_PARAM = 'max';
export const SORT_DESCENDING = 'desc';
//export const SORT_ASCENDING = 'asc';
export const DEFAULT_NUMBER_OF_RESULTS = 10;

// export const generateHeaderWithToken = () => {
//   return {
//     headers: {
//       'X-Auth-Token': localStorage.getItem('token') ?? '',
//     },
//   };
// };

const myApi = axios.create({
  baseURL: API_BASE_URL,
});

myApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

myApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Token expired or invalid, redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const axiosGetHandler = async (
  url: string,
  setError?: Dispatch<SetStateAction<Error | undefined>>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  if (setLoading) setLoading(true);
  try {
    return (await myApi.get(url)).data;
  } catch (error) {
    if (setError) setError(error as Error);
  } finally {
    if (setLoading) setLoading(false);
  }
};

export const axiosPostHandler = async (
  url: string,
  data: any,
  setError: Dispatch<SetStateAction<Error | undefined>>,
  setSaving: Dispatch<SetStateAction<boolean>>
) => {
  setSaving(true);
  try {
    return (await myApi.post(url, data)).data;
  } catch (error) {
    setError(error as Error);
  } finally {
    setSaving(false);
  }
};

export const axiosPutHandler = async (
  url: string,
  data: any,
  setError: Dispatch<SetStateAction<Error | undefined>>,
  setUpdating: Dispatch<SetStateAction<boolean>>
) => {
  setUpdating(true);
  try {
    return (await myApi.put(url, data)).data;
  } catch (error) {
    setError(error as Error);
  } finally {
    setUpdating(false);
  }
};

export const axiosDeleteHandler = async (
  url: string,
  setError?: Dispatch<SetStateAction<Error | undefined>>,
  setDeleting?: Dispatch<SetStateAction<boolean>>
) => {
  if (setDeleting) setDeleting(true);
  try {
    return (await myApi.delete(url)).data;
  } catch (error) {
    if (setError) setError(error as Error);
  } finally {
    if (setDeleting) setDeleting(false);
  }
};
