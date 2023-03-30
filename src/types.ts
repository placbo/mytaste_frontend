export interface Item {
  id: string;
  title: string;
  comment: string;
  image: string;
  averageRating: number;
  averageRatingCount: number;
}

export interface ItemsResponse {
  items: Item[];
}
