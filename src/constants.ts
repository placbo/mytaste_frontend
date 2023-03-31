export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK === 'true';

export const BASE_URL = import.meta.env.VITE_MYTASTE_API_HOST ?? '';
export const ITEMS_URL = BASE_URL + '/items';

export const IMAGES_URL = BASE_URL + '/images/';
export const THUMBNAIL_URL = IMAGES_URL + '/thumbs/thumbnail.';
