import { NextPage } from 'next';
import Button from '@/components/common/parts/Button';
import { useChangeText } from '@/hooks/useChangeText';


const Page: NextPage = () => {
  const { text, handleChangeText } = useChangeText();
  return (
    <>
      <div className='gap-x-2 mx-auto my-10 max-w-4xl'>
        <div className='flex justify-center'>
          <div>
            {
              text && <h2 className='text-bold text-4xl'>{text}</h2>
            }
            <input placeholder='テキストを入力' type="text" onChange={handleChangeText} value={text} className='border outline-none px-3 py-2 rounded-sm' />
          </div>
        </div>
      </div>
    </>
  )
};

export default Page;
