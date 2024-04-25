import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await axios.post('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/signin', formData);
      console.log('Signin successful:', response.data);
      // Optionally, you can redirect the user to a new page or display a success message
    } catch (error) {
      console.error('Signin failed:', error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only mb-4">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none  mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only mb-4">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <Link to ="/otp" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </Link>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <p>Don't have an account?</p>
              <Link to="/signup" className="text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Sign up
              </Link>
             
            </div>
            <Link to="/reset" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Reset Password?
              </Link>
            <div>
              <Link to="/forgot" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
