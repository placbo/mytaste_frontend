export interface Item {
  id: string;
  title: string;
  comment: string;
  creator: string;
  created: string;
  imageURL: string;
  averageRating: number;
  averageRatingCount: number;
}

export interface ItemsResponse {
  items: Item[];
}
