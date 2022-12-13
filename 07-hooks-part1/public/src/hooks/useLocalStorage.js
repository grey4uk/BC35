import { useState, useEffect } from 'react';

export const useLocalStorage = ({ initValue, key }) => {
  const [storage, setStorage] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [storage, key]);

  return [storage, setStorage];
};
