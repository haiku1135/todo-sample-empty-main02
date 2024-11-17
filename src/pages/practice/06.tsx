import { NextPage } from 'next';
import Button from '@/components/common/parts/Button';
import { useFeedbackList } from '@/hooks/useFeedbackList';

const Page: NextPage = () => {
  const { feedback, handleChangeFeedback, handleAddFeedbackList, feedbackList } = useFeedbackList();
  return (
    <div className='flex justify-center mx-auto mt-10 max-w-4xl'>
      <div>
        {/* feedback form */}
        <div>
          <textarea
            onChange={handleChangeFeedback}
            className='border outline-none px-3 py-2 rounded-md'
            value={feedback}
          />
          <Button onClick={handleAddFeedbackList} className='mt-4' label="追加" variant="primary" />
        </div>
        {/* feedback list */}
        <div className='flex justify-center mt-10'>
          <ul className='text-base w-full'>
            {
              feedbackList.map((feedback, index) => (
                <li key={index} className='border-b border-gray-100 p-4 w-full'>{feedback}</li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  )
};

export default Page;
