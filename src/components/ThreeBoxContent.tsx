type Props = {
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  title3: string;
  content3: string;
}

const ThreeBoxContent = (props: Props): JSX.Element => {
  const { title1, content1, title2, content2, title3, content3 } = props;
  return (
    <div className='grid grid-cols-3 gap-x-4'>
      <div className='rounded-sm p-4 shadow-xl'>
        <h2 className='text-2xl font-bold'>{title1}</h2>
        <p className='text-base mt-4'>{content1}</p>
      </div>
      <div className='rounded-sm p-4 shadow-xl'>
        <h2 className='text-2xl font-bold'>{title2}</h2>
        <p className='text-base mt-4'>{content2}</p>
      </div>
      <div className='rounded-sm p-4 shadow-xl'>
        <h2 className='text-2xl font-bold'>{title3}</h2>
        <p className='text-base mt-4'>{content3}</p>
      </div>
    </div>

  );
};

export default ThreeBoxContent;