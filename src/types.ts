export interface Item {
  itemId?: string;
  title: string;
  description?: string;
  creator?: string;
  created?: string;
  imageURL?: string;
  averageRating?: number;
  averageRatingCount?: number;
  tags?: Tag[];
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

export interface ISaveItemResponse {
  id: string;
}

export interface TagWithUsageCount {
  tagId: number;
  tag: string;
  usageCount: number;
}
