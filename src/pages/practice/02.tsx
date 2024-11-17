import { NextPage } from 'next';
import Button from '@/components/common/parts/Button';
import { useCountUp } from '@/hooks/useCountUp';


const Page: NextPage = () => {
  const { count, handleCountUp } = useCountUp();
  return (
    <>
      <div className='gap-x-2 mx-auto my-10 max-w-4xl'>
        <div className='flex justify-center'>
          <div>
            <h2 className='text-2xl font-bold text-center'>カウントアップアプリ</h2>
            <p className='text-base mt-4'>{count}</p>
            <Button
              onClick={handleCountUp}
              label="カウントアップ"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default Page;
