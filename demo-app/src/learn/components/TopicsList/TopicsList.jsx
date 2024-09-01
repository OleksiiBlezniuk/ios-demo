import React from 'react';
import { TopicItem } from './components/TopicItem';
import './TopicsList.css';
import { useMockedLoader } from '../../../hooks/useMockedLoader';

export const TopicsList = ({ topics }) => {
  const isLoading = useMockedLoader();

  if (isLoading) {
    return (
      <div className='loader'>
        Loading...
      </div>
    )
  }

  return (
    <div className='topicsWrapper'>
      {topics.map(({ id, title, description }) => (
        <TopicItem
          key={id}
          title={title}
        />
      ))}
    </div>
  )
};
