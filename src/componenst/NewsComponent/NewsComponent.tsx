import { FC, useCallback, useEffect, useState } from 'react';
import { NewsListComponent } from '../NewsListComponent/NewsListComponent';
import { INews, IObjRequest } from '../../types/interfase';
import { INITIAL_REQUEST } from '../../constants/constant';
import { useGetNewsQuery } from '../../api/newsApi';
import s from './newsComponent.module.scss';

export const NewsComponent: FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [firstRequest, setFirstRequest] = useState<boolean>(true);
  const [isHasMore, setIsHasMore] = useState<boolean>(false);
  const [objRequest, setObjRequest] = useState<IObjRequest>(INITIAL_REQUEST);

  const { data, isFetching } = useGetNewsQuery(objRequest);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const newsProcessing = (newsList: any[]) => {
    setFirstRequest(false);
    if (firstRequest) {
      setNews(newsList);
    } else {
      setNews((prev) => [...prev, ...newsList]);
    }
  };

  useEffect(() => {
    if (Array.isArray(data?.posts) && !isFetching) {
      newsProcessing(data.posts);
      setIsHasMore(data.total === objRequest.skip + 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetching]);

  const newNewsRequest = useCallback((): void => {
    setObjRequest((prev) => ({
      limit: prev.limit,
      skip: prev.skip + 10,
    }));
  }, []);

  return (
    <div className={s['news-body']}>
      {news.length ? (
        <NewsListComponent
          isHasMore={isHasMore}
          newsList={news}
          newNewsRequest={newNewsRequest}
        />
      ) : (
        'no news'
      )}
    </div>
  );
};
