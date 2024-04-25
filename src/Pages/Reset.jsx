import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { newPassword, confirmPassword } = formData;
  
    if (!newPassword || !confirmPassword) {
      setError('Please enter both new password and confirm password');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    // Additional validation for newPassword
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
  
    // Regex pattern for at least one uppercase letter, one lowercase letter, and one digit
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    if (!passwordPattern.test(newPassword)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, and one digit');
      return;
    }
  
    try {
      const response = await axios.post(`https://your-api-url.com/reset-password/${token}`, { newPassword });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="newPassword" className="sr-only">New Password</label>
              <input id="newPassword" name="newPassword" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="New Password" value={formData.newPassword} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="confirm-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Reset Password
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

export default ResetPassword;
