import { Dispatch, SetStateAction } from 'react';

export const PAGE_PARAM = 'page';
export const QUERY_PARAM = 'q';
export const SORT_PARAM = 'sort';
export const NUMBER_PR_PAGE_PARAM = 'max';
export const SORT_DESCENDING = 'desc';
export const SORT_ASCENDING = 'asc';
export const DEFAULT_NUMBER_OF_RESULTS = 10;

import axios from 'axios';

export const generateHeaderWithToken = () => {
  return {
    headers: {
      'X-Auth-Token': localStorage.getItem('token') ?? '',
    },
  };
};

export const axiosGetHandler = async (url: string, setError?: any, setLoading?: Dispatch<SetStateAction<boolean>>) => {
  setLoading && setLoading(true);
  try {
    return (await axios.get(url, generateHeaderWithToken())).data;
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
    return (await axios.post(url, data, generateHeaderWithToken())).data;
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
    return (await axios.put(url, data, generateHeaderWithToken())).data;
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
    return (await axios.delete(url, generateHeaderWithToken())).data;
  } catch (error) {
    setError && setError(error);
  } finally {
    setDeleting && setDeleting(false);
  }
};
