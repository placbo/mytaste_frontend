import { ITEMS_URL } from '../constants';
import {
  axiosGetHandler,
  axiosPostHandler,
  axiosPutHandler,
  NUMBER_PR_PAGE_PARAM,
  PAGE_PARAM,
  SORT_DESCENDING,
  SORT_PARAM,
} from './apiUtils';
import { Dispatch, SetStateAction } from 'react';
import { Item, ItemsResponse, Review, Tag, TagWithUsageCount } from '../types.js';

export const getAllItems = (
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<ItemsResponse> => {
  return axiosGetHandler(ITEMS_URL, setError, setLoading);
};

export const getItems = (
  page: number,
  numberPrPage: number,
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<ItemsResponse> => {
  const url = `${ITEMS_URL}?${PAGE_PARAM}=${page}&${SORT_PARAM}=${SORT_DESCENDING}&${NUMBER_PR_PAGE_PARAM}=${numberPrPage}`;
  return axiosGetHandler(url, setError, setLoading);
};

export const searchItems = (
  searchQuery: string,
  page: number,
  numberPrPage: number,
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<ItemsResponse> => {
  const url = `${ITEMS_URL}/search?q=${searchQuery}&${PAGE_PARAM}=${page}&${SORT_PARAM}=${SORT_DESCENDING}&${NUMBER_PR_PAGE_PARAM}=${numberPrPage}`;
  return axiosGetHandler(url, setError, setLoading);
};

export const getItem = (
  id: number,
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<Item> => {
  return axiosGetHandler(`${ITEMS_URL}/${id}`, setError, setLoading);
};

export const getTags = (
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<TagWithUsageCount[]> => {
  return axiosGetHandler(`${ITEMS_URL}/tags`, setError, setLoading);
};

export const getItemTags = (
  id: number,
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<Tag[]> => {
  return axiosGetHandler(`${ITEMS_URL}/${id}/tags`, setError, setLoading);
};

export const getItemReviews = (
  id: number,
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<any> => {
  return axiosGetHandler(`${ITEMS_URL}/${id}/reviews`, setError, setLoading);
};

export const getUserReview = (
  itemId: number,
  setError?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<Review> => {
  return axiosGetHandler(`${ITEMS_URL}/${itemId}/review`, setError, setLoading);
};

export const saveReview = (
  review: Review,
  setError: Dispatch<SetStateAction<Error | undefined>>,
  setSaving: Dispatch<SetStateAction<boolean>>
): Promise<any> => {
  const itemId = review.itemId;
  const url = `${ITEMS_URL}/${itemId}/reviews`;
  if (review.reviewId) {
    // Update existing review
    return axiosPutHandler(url, review, setError, setSaving);
  } else {
    // Create new review
    return axiosPostHandler(url, review, setError, setSaving);
  }
};
