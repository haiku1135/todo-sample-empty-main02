import { useState } from 'react';

const CORRECT_ANSWER = 'ライブラリ';

type UseQuiz = () => {
  handleClickChoice: (choice: string) => void;
  handleSubmit: () => void;
  result: string;
  userChoice: string;
};

export const useQuiz: UseQuiz = () => {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');
  const handleClickChoice = (choice: string) => {
    setUserChoice(choice);
  };
  const handleSubmit = () => {
    if (userChoice === CORRECT_ANSWER) {
      setResult('正解！');
    } else {
      setResult('不正解。。');
    }
  };
  return { handleClickChoice, handleSubmit, result, userChoice };
};
