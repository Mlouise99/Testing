import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.newPassword) {
      setError('Please enter both email and new password');
      return;
    }

    try {
      const response = await axios.post('https://your-api-url.com/reset-password', formData);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only mb-4">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={formData.email} onChange={handleChange} />
            </div>
            
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
          <div className="mt-4">
            <Link to="/signin" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Go back to Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
