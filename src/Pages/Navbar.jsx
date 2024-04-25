import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pr-56 pl-40">
      <div>
        <p className='bg-green-300 h-10 w-full max-w-full rounded-2xl border border-black m-4'>
          M.Louise
        </p>
        <div className='flex flex-col'>
          <Link to="/" className='m-2 text-blue-400'> Home</Link> 
          <Link to="/about" className='m-2 text-blue-400'> About me</Link>
          <Link to="/contact" className='m-2 text-blue-400'> Contact me</Link>
        </div>
      </div>
      <div className='pr-30'>
        <Link to="/signup" className='m-2 text-blue-400 font-bold'>Sign Up</Link>
        <Link to="/signin" className='m-2 text-blue-400 font-bold'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
