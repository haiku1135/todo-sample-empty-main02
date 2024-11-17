import { useState } from 'react';


type UseCountUp = () => {
  count: number;
  handleCountUp: () => void;
}

export const useCountUp: UseCountUp = () => {
  const [count, setCount] = useState(0);
  const handleCountUp = () => {
    setCount((prevState) => prevState + 1);
  };

  return { count, handleCountUp };
}