import { useState, ChangeEvent } from 'react';


type UseChangeText = () => {
  text: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useChangeText: UseChangeText = () => {
  const [text, setText] = useState('');
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return { text, handleChangeText };
};