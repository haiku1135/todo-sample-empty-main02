import { useState } from 'react';

type UseVisibility = () => {
  isVisibility: boolean;
  handleClickVisible: () => void;
  handleClickInvisible: () => void;
};

export const useVisibility: UseVisibility = () => {
  const [isVisibility, setIsVisibility] = useState(false);
  const handleClickVisible = () => {
    setIsVisibility(true);
  };
  const handleClickInvisible = () => {
    setIsVisibility(false);
  };

  return { isVisibility, handleClickVisible, handleClickInvisible };
};