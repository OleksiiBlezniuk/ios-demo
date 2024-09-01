import React from 'react';
import './Learn.css';
import { ModulesList } from './components/ModulesList/Moduleslist';
import { MODULES } from './components/ModulesList/constants';
import { useMockedLoader } from '../hooks/useMockedLoader';

export const Learn = () => {
  const isLoading = useMockedLoader();

  return (
    <div>
      <div className='title'>
        <h1>Courses</h1>
      </div>

      {isLoading
        ? <div className='loader'>Loading...</div>
        : (
          <div className='wrapper'>
            <ModulesList
              modules={MODULES}
            />
          </div>
        )
      }
    </div>
  );
}
