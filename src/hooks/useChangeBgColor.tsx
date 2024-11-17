import { useState } from 'react';

export const COLORS = ['blue', 'black', 'green', 'lightgreen'];

type UseChangeBgColor = () => {
  currentColorIndex: number;
  changeColor: () => void;
}

export const useChangeBgColor: UseChangeBgColor = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const changeColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % COLORS.length)
  };
  return { currentColorIndex, changeColor };
}