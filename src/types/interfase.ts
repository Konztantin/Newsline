export interface INews {
  id: number;
  reactions: number;
  tags: string[];
  title: string;
  userId: number;
  body: string;
}

export interface IObjRequest {
  limit: number;
  skip: number;
}

export interface INewsRequest {
  limit: number;
  posts: INews[];
  skip: number;
  total: number;
}
