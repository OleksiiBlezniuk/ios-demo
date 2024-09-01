import React from 'react';
import cn from 'classnames';
import './Paywall.css';
import { useMockedLoader } from '../../../hooks/useMockedLoader';

const PLANS = [
  {
    id: 1,
    title: 'Basic',
    price: '10',
    description: 'Basic plan'
  },
  {
    id: 2,
    title: 'Premium',
    price: '20',
    description: 'Premium plan'
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '30',
    description: 'Enterprise plan'
  }
];

export const Paywall = ({ isOpened, setIsOpened }) => {
  const isLoading = useMockedLoader();

  return (
    <>
      <div
        className={cn('paywallOverlay', cn({
          'overlayOpened': isOpened
        }))}
        onClick={() => {

          setIsOpened(false)
        }}
      /> 
      <div className={cn('paywallWrapper', {
        'paywallOpened': isOpened
      })}>
        {isLoading
          ? <div className='loader'>Loading...</div>
          : (
            <>
              <h2 className='paywallTitle'>
                Select your plan

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('close');

                    setIsOpened(false)
                  }}
                  className='closePaywallButton'
                >
                  X
                </button>
              </h2>

              <div className='plansWrapper'>
                {PLANS.map(({ id, title, price, description }) => (
                  <div className='plan' key={id}>
                    <h3 className='planTitle'>{title}</h3>
                    <p className='planDescription'>{description}</p>
                    <p className='planPrice'>{price}$</p>
                  </div>
                ))}
              </div>

              <button className='buyButton'>💸 BUY NOW 💸</button>
            </>
          )
        }
      </div>
    </>
  )
}
