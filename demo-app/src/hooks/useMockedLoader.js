import { useState, useEffect } from 'react';

export const useMockedLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return isLoading;
};
