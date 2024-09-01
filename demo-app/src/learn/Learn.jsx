import React from 'react';
import './Learn.css';
import { ModulesList } from './components/ModulesList/Moduleslist';

export const Learn = () => {
  return (
    <div>
      <div className='title'>
        <h1>Courses</h1>
      </div>

      <div className='wrapper'>
        <ModulesList />
      </div>
    </div>
  );
}
