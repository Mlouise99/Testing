import React from 'react';

const Home = () => {
  return (
    <div className='bg-red-200 h-screen w-full '>
      <div className='p-4'>
        <p className='bg-green-300 h-10 w-full max-w-full rounded-2xl border border-black m-4'>
          Jane doe
        </p>
      </div>
      <div className='flex flex-col p-4'>
        <a href="#home" className='m-2 text-blue-400'>Home</a>
        <a href="#about" className='m-2 text-blue-400'>About me</a>
        <a href="#contact" className='m-2 text-blue-400'>Contact me</a>
      </div>
      
    </div>
  );
};

export default Home;
