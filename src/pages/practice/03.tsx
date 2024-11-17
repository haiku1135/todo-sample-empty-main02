import { NextPage } from 'next';
import Button from '@/components/common/parts/Button';
import { useVisibility } from '@/hooks/useVisibility';

const Page: NextPage = () => {
  const { isVisibility, handleClickVisible, handleClickInvisible } = useVisibility();
  return (
    <>
      <div className='gap-x-2 mx-auto my-10 max-w-4xl'>
        <div className='flex justify-center'>
          <div>
            <h2 className='text-2xl font-bold text-center'>
              {
                isVisibility && "こんにちは"
              }
            </h2>
            <div className='flex justify-center gap-x-3 mt-4'>
              <Button
                onClick={handleClickVisible}
                label="表示"
                variant="primary"
              />
              <Button
                onClick={handleClickInvisible}
                label="非表示"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Page;
