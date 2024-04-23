import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-red-200 h-screen w-full '>
      <div className='p-4'>
        <p className='bg-green-300 h-10 w-full max-w-full rounded-2xl border border-black m-4'>
          Jane doe
        </p>
      </div>
      <div className='flex  p-4 gap-10' >
        <div className=' flex flex-col '>
        <Link to="/" className='m-2 text-blue-400'> Home</Link> 
        <Link to="/about" className='m-2 text-blue-400'> About me</Link>
        <Link to="/contact" className='m-2 text-blue-400'> Contact me</Link>
        </div>
        <div className='bg-yellow-200 justify-center items-center border w-full border-black h-96' >

</div>
        
      </div>
      
    </div>
  );
};

export default Home;
