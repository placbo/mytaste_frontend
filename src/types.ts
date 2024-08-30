export interface Item {
  itemId?: string;
  title: string;
  description?: string;
  creator?: string;
  created?: string;
  imageURL?: string;
  averageRating?: number;
  averageRatingCount?: number;
}

export interface ItemsResponse {
  items: Item[];
}

export interface Review {
  reviewId?: number;
  itemId?: number;
  user?: string;
  comment?: string;
  rating: number;
}

export interface Tag {
  tagId: number;
  itemId: number;
  tag: string;
}

export interface ItemFormFields {
  title: string;
  tags: string;
  description: string;
  rating: number;
  review: string;
}

export const emptyItemFormFields: ItemFormFields = {
  title: '',
  tags: '',
  description: '',
  rating: 0,
  review: '',
};

export interface ISaveItemResponse {
  id: string;
}
