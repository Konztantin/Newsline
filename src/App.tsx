import { FC } from 'react';
import { NewsViews } from './views/newsViews';
import { HeadersComponent } from './componenst/Headers/Headers';

export const App: FC = () => {
  return (
    <>
      <HeadersComponent />
      <NewsViews />
    </>
  );
};
