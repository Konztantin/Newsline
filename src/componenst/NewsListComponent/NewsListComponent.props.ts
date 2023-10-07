import { INews } from "../../types/interfase";

export interface INewsListComponent {
  newsList: INews[];
  newNewsRequest: () => void;
  isHasMore: boolean;
}

export interface INewsItemComponent {
  news: INews;
}