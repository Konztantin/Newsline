import { FC } from 'react';
import { INewsListComponent } from './NewsListComponent.props';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NewsItemComponent } from './NewsItemComponent';
import s from './index.module.scss';

export const NewsListComponent: FC<INewsListComponent> = ({
  newsList,
  newNewsRequest,
  isHasMore,
}) => {
  return (
    <div className={s['news-wrap']}>
      <InfiniteScroll
        dataLength={newsList.length}
        next={newNewsRequest}
        hasMore={!isHasMore}
        loader={<h4>Loading...</h4>}
      >
        {newsList.map((item) => (
          <NewsItemComponent news={item} key={item.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
