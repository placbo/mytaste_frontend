export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK === 'true';

export const API_BASE_URL = import.meta.env.VITE_MYTASTE_API_HOST ?? '';
export const ITEMS_URL = '/items';
export const LOGIN_URL = '/auth/login';

export const IMAGES_URL = API_BASE_URL + '/images';
export const THUMBNAIL_URL = IMAGES_URL + '/thumbs/thumbnail.';
export const IMAGE_UPLOAD_URL = API_BASE_URL + '/imageupload';
