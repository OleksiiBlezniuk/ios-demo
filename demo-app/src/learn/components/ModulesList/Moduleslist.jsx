import React from 'react';
import { ModuleItem } from './components/ModuleItem';

export const ModulesList = ({ modules }) => {
  return (
    <div>
      {modules.map(({ id, title, description, topics }) => (
        <ModuleItem
          key={id}
          title={title}
          description={description}
          topics={topics}
        />
      ))}
    </div>
  );
};
