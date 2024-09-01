import React, { useState } from 'react';
import './ModuleItem.css';
import { TopicsList } from '../../TopicsList/TopicsList';
import { Paywall } from '../../Paywall/Paywall';

export const ModuleItem = ({ title, description }) => {
  const [isTopicOpened, setIsTopicOpened] = useState(false);
  const [isPaywallOpened, setIsPaywallOpened] = useState(false);

  const toggleTopics = () => {
    setIsTopicOpened((prev) => !prev);
  }

  return (
    <div className='moduleWrapper'>
      <h2 className='moduleTitle'>
        <div className='nameWrapper'>
          <div className='moduleIcon'>
            📕
          </div>
          {title}
        </div>

        <button
          className='openTopicsButton'
          onClick={toggleTopics}
        >
          {isTopicOpened ? '^' : 'v'}
        </button>
      </h2>
      <p className='moduleDescription'>
        {description}
      </p>

      <button
        className='buyButton'
        onClick={() => {
          console.log('buy button clicked');

          setIsPaywallOpened(true)
        }}
      >
        Buy subscription
      </button>

      {isTopicOpened && (
        <TopicsList />
      )}

      <Paywall
        isOpened={isPaywallOpened}
        setIsOpened={setIsPaywallOpened}
      />
    </div>
  )
};
