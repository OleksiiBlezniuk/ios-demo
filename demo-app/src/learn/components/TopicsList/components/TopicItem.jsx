import React, { useState } from 'react';
import './TopicItem.css';
import { Paywall } from '../../Paywall/Paywall';

export const TopicItem = ({ title }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <button
      className='topicWrapper'
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();

        setIsOpened(true)
      }}
      eventStopPropagation
    >
      <div className='topicIcon'>
        🔒
      </div>
      <h3>{title}</h3>

      <Paywall
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
    </button>
  );
}

