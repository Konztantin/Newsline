import { FC } from 'react';
import { NewsComponent } from '../componenst/NewsComponent/NewsComponent';

export const NewsViews: FC = () => {
  return (
    <div>
      <div>
        <span>List of news:</span>
      </div>
      <div>
        <NewsComponent />
      </div>
    </div>
  );
};
