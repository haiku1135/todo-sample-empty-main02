import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useQuiz } from '@/hooks/useQuiz';

const QUESTION = 'What is React?';
const CHOICE_LIST = ['ライブラリ', 'フレームワーク', '言語', 'データベース'];

const Page: NextPage = () => {
  const { handleClickChoice, handleSubmit, result, userChoice } = useQuiz();
  return (
    <div className="mx-auto mt-10 flex max-w-4xl justify-center">
      <div>
        <h1 className="text-bold text-center text-4xl">{QUESTION}</h1>
        <div className="mt-4 flex justify-center gap-x-2">
          {CHOICE_LIST.map((choice, index) => (
            <Button
              onClick={() => handleClickChoice(choice)}
              key={index}
              label={choice}
              variant="secondary"
              className={`${choice === userChoice && 'bg-black'}`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button onClick={handleSubmit} label="送信" variant="primary" />
        </div>
        <h3 className="mt-8 text-center text-4xl">{result}</h3>
      </div>
    </div>
  );
};

export default Page;
