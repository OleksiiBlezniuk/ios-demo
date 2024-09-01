import React from 'react';
import { MODULES } from './constants';
import { ModuleItem } from './components/ModuleItem';

export const ModulesList = () => {
  return (
    <div>
      {MODULES.map(({ id, title, description }) => (
        <ModuleItem
          key={id}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
