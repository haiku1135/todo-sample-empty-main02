import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useStarWars } from '@/hooks/useStarWars';


const Page: NextPage = () => {
  const { character, handleClickChangeId } = useStarWars();

  return (
    <div className="mx-auto mt-10 flex max-w-4xl justify-center">
      <div className='flex justify-center'>
        <div>
          {
            character ? (
              <div className="text-center text-base">
                <h2>{character.name}</h2>
                <p>height: {character.height} </p>
                <p>weight: {character.mass}</p>
                <p>hair_color:  {character.hair_color}</p>
                <p>eye_color:  {character.eye_color}</p>
                <p>birth:  {character.birth_year}</p>
                <p>gender: {character.gender}</p>
              </div>
            ) : (
              <p className='text-center text-xl'>Loading...</p>
            )
          }


          <div className='flex justify-center mt-8'>
            <Button onClick={handleClickChangeId} label='次のキャラクター' variant='primary' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
