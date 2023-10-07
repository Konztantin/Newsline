import { FC } from 'react';
import s from './headers.module.scss';

export const HeadersComponent: FC = () => {
  return (
    <div className={s['headers-body']}>
      <div className={s['headers-text']}>
        <span>Last news</span>
      </div>
    </div>
  );
};
