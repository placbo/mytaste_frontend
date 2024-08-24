import { ItemsResponse, Review, Tag } from '../types';

export const mockItems: ItemsResponse = {
  items: [
    { itemId: '1', title: 'mockItem 1' },
    { itemId: '2', title: 'mockItem 2' },
    { itemId: '3', title: 'mockItem 3' },
  ],
};

export const mockTags: Tag[] = [
  {
    tagId: 1,
    itemId: 1,
    tag: 'tag1',
  },
  {
    tagId: 2,
    itemId: 1,
    tag: 'tag2',
  },
  {
    tagId: 3,
    itemId: 1,
    tag: 'tag3',
  },
];

export const mockReviews: Review[] = [
  {
    comment: 'comment 1',
    reviewId: 1,
    itemId: 1,
    user: 'pcb',
    rating: 1,
  },
  {
    comment: 'comment 2',
    reviewId: 2,
    itemId: 1,
    user: 'pcb',
    rating: 3,
  },
];
