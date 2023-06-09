export interface Item {
  itemId: string;
  title: string;
  comment?: string;
  creator?: string;
  created?: string;
  imageURL?: string;
  averageRating?: number;
  averageRatingCount?: number;
}

export interface Review {
  reviewId: number;
  itemId: number;
  user: string;
  comment: string;
  rating: number;
}

export interface Tag {
  tagId: number;
  itemId: number;
  tag: string;
}

export interface ItemsResponse {
  items: Item[];
}
