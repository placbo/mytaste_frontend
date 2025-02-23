import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

export const PAGE_PARAM = 'page';
export const QUERY_PARAM = 'q';
export const SORT_PARAM = 'sort';
export const NUMBER_PR_PAGE_PARAM = 'max';
export const SORT_DESCENDING = 'desc';
export const SORT_ASCENDING = 'asc';
export const DEFAULT_NUMBER_OF_RESULTS = 10;

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

export const axiosGetHandler = async (url: string, setError?: any, setLoading?: Dispatch<SetStateAction<boolean>>) => {
  setLoading && setLoading(true);
  try {
    return (await myApi.get(url)).data;
  } catch (error) {
    setError && setError(error);
  } finally {
    setLoading && setLoading(false);
  }
};

export const axiosPostHandler = async (
  url: string,
  data: any,
  setError: any,
  setSaving: Dispatch<SetStateAction<boolean>>
) => {
  setSaving(true);
  try {
    return (await myApi.post(url, data)).data;
  } catch (error) {
    setError(error);
  } finally {
    setSaving(false);
  }
};

export const axiosPutHandler = async (
  url: string,
  data: any,
  setError: any,
  setUpdating: Dispatch<SetStateAction<boolean>>
) => {
  setUpdating(true);
  try {
    return (await myApi.put(url, data)).data;
  } catch (error) {
    setError(error);
  } finally {
    setUpdating(false);
  }
};

export const axiosDeleteHandler = async (
  url: string,
  setError?: any,
  setDeleting?: Dispatch<SetStateAction<boolean>>
) => {
  setDeleting && setDeleting(true);
  try {
    return (await myApi.delete(url)).data;
  } catch (error) {
    setError && setError(error);
  } finally {
    setDeleting && setDeleting(false);
  }
};
