import { delay, http, HttpResponse } from 'msw';
import { API_BASE_URL } from '../constants';
import { removeMockItemByIdFromItemList } from './mockHelpers';
import { mockItems, mockReviews, mockTags } from './mocks';

export const handlers = [
  http.get(API_BASE_URL + '/items', async () => {
    await delay();
    return HttpResponse.json(mockItems);
  }),

  http.get(API_BASE_URL + '/items/(\\d+)', async ({ request }) => {
    const itemid = request.url.split('/').pop();
    await delay();
    if (itemid === '12') return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(mockItems.items[0]);
  }),

  http.delete(API_BASE_URL + '/items/(\\d+)', ({ request }) => {
    const itemid = request.url.split('/').pop();
    mockItems.items = removeMockItemByIdFromItemList(mockItems.items, itemid);

    return HttpResponse.json('OK');
  }),

  http.post(API_BASE_URL + '/items', async () => {
    await delay();
    return HttpResponse.json('OK', { status: 201 });
  }),

  http.put(API_BASE_URL + '/items/(\\d+)', () => {
    return HttpResponse.json({});
  }),

  http.get(API_BASE_URL + '/items/(\\d+)/tags', async () => {
    await delay();
    return HttpResponse.json(mockTags);
  }),

  http.get(API_BASE_URL + '/items/(\\d+)/reviews', async () => {
    await delay();
    return HttpResponse.json(mockReviews);
  }),

  http.post(API_BASE_URL + '/auth/login', () => {
    return HttpResponse.json({ success: true, token: 'QXJuZSBCZW5vbmkgc3Bpc2VyIGJhbmFuCg==' });
  }),
];
