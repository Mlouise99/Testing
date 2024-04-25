import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name || !/^[a-zA-Z ]+$/.test(formData.name)) validationErrors.name = 'Name must be a valid string';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password || formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters';
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) validationErrors.phoneNumber = 'Phone number must be at least 10 digits';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; 
    }

    try {
      const response = await axios.post(`https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/add`, formData);
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Signup</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-4">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4`} placeholder="Name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-4">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className={`appearance-none rounded-none  mb-4 relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Email address" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-4 text-gray-700">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className={`appearance-none  mb-4 rounded-none relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Password" value={formData.password} onChange={handleChange} />
              {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-4 text-gray-700">Phone Number</label>
              <input id="phoneNumber" name="phoneNumber" type="tel" autoComplete="tel" required className={`appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <p className="mt-1 text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
          </div>

          <div>
            <button type="submit" className="mt-4 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Signup
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Link to="/signin" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
