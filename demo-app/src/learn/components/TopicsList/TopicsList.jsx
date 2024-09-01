import React from 'react';
import { TOPICS } from './constants';
import { TopicItem } from './components/TopicItem';

export const TopicsList = () => {
  return (
    <div>
      {TOPICS.map(({ id, title, description }) => (
        <TopicItem
          key={id}
          title={title}
        />
      ))}
    </div>
  )
};
