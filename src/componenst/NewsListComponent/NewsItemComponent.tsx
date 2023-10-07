import { FC } from 'react';
import { INewsItemComponent } from './NewsListComponent.props';
import { TagsComponent } from '../TagsComponent/TagsComponent';
import s from './index.module.scss';

export const NewsItemComponent: FC<INewsItemComponent> = ({ news }) => {
  return (
    <div className={s['news-body']}>
      <span>Name: {news.title}</span>
      <span className={s['news-body-text']}>{news.body}</span>
      <div>
        <TagsComponent tags={news.tags} />
      </div>
      <span>Rating: {news.reactions}</span>
    </div>
  );
};
