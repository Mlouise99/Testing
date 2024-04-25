import React, { useState } from 'react';

const ConfirmationPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!otp) {
      setError('Please enter OTP');
      return;
    }

    // Simulate verification process (replace with actual API call)
    if (otp !== '123456') { // Replace '123456' with the correct OTP
      setError('Incorrect OTP. Please try again.');
      return;
    }

    // Handle success case
    setSuccessMessage('OTP verified successfully.');
    setError('');
  };

  // Function to resend OTP
  const handleResendOTP = () => {
    // Simulate OTP resend process (replace with actual API call)
    setSuccessMessage('OTP resent successfully.');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">OTP Verification</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="otp" className="sr-only">OTP</label>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="otp"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify OTP
            </button>
            <button
              type="button"
              onClick={handleResendOTP}
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationPage;
