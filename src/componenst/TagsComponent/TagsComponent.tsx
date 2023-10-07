import { FC } from 'react';
import { ITagsComponent } from './TagsComponent.props';
import s from './index.module.scss';

export const TagsComponent: FC<ITagsComponent> = ({ tags }) => {
  if (!tags.length) return '';

  return (
    <div>
      <span>Tags: </span>
      <ul className={s['tags-body']}>
        {tags.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
