import { http, HttpResponse } from 'msw';
import { mockItems, mockReviews, mockTags } from './mocks';
import { BASE_URL } from '../constants';

export const handlers = [
  http.get(BASE_URL + '/items', () => {
    return HttpResponse.json(mockItems);
  }),
  http.get(BASE_URL + '/items/(\\d+)', () => {
    return HttpResponse.json(mockItems.items[0]);
  }),
  http.delete(BASE_URL + '/items/(\\d+)', () => {
    return HttpResponse.json({});
  }),
  http.post(BASE_URL + '/items/(\\d+)', () => {
    return HttpResponse.json({});
  }),
  http.put(BASE_URL + '/items/(\\d+)', () => {
    return HttpResponse.json({});
  }),
  http.get(BASE_URL + '/items/(\\d+)/tags', () => {
    return HttpResponse.json(mockTags);
  }),
  http.get(BASE_URL + '/items/(\\d+)/reviews', () => {
    return HttpResponse.json(mockReviews);
  }),
  http.post(BASE_URL + '/auth/login', () => {
    return HttpResponse.json({ success: true, token: 'QXJuZSBCZW5vbmkgc3Bpc2VyIGJhbmFuCg==' });
  }),
];
