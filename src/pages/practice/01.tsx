import { NextPage } from 'next';
import ThreeBoxContent from '@/components/ThreeBoxContent';
const Page: NextPage = () => {
  return (
    <>
      <div className='gap-x-2 mx-auto my-10 max-w-4xl'>
        <ThreeBoxContent
          title1="title"
          content1="content"
          title2="title"
          content2="content"
          title3="title"
          content3="content"
        />
      </div>
    </>
  )
};

export default Page;
