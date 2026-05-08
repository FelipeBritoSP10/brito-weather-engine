import { useState } from 'react';

export const useUser = () => {
  const [userName, setUserName] = useState<string>('');
  const [isFirstAccess, setIsFirstAccess] = useState(true);

  const saveName = (name: string) => {
    if (name.trim()) {
      setUserName(name);
      setIsFirstAccess(false);
    }
  };

  return { userName, isFirstAccess, saveName };
};