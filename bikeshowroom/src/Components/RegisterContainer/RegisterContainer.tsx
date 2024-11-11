import React from 'react'

const RegisterContainer = () => {
  return (
    <div className="mt-10">
      <div className="bg-white md:w-[80vh] mx-auto px-10 md:px-16 py-10 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl md:text-4xl text-gray-800 font-bold">Register Now</h1>
        
        {/* Name Field */}
        <div className="form mt-8 md:flex items-center">
          <label className="text-xl text-gray-700 md:w-1/4">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full md:w-3/4 px-4 py-2 mt-2 md:mt-0 focus:border-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone Field */}
        <div className="form mt-8 md:flex items-center">
          <label className="text-xl text-gray-700 md:w-1/4">Phone</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full md:w-3/4 px-4 py-2 mt-2 md:mt-0 focus:border-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email Field */}
        <div className="form mt-8 md:flex items-center">
          <label className="text-xl text-gray-700 md:w-1/4">Email</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full md:w-3/4 px-4 py-2 mt-2 md:mt-0 focus:border-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Checkbox Section */}
        <div className="mt-10">
          <p className="text-xl text-gray-800">How can we help you?</p>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="h-5 w-5 text-blue-500" />
            <p className="text-lg ml-3 text-gray-700">Book a Test Drive</p>
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="h-5 w-5 text-blue-500" />
            <p className="text-lg ml-3 text-gray-700">Availability</p>
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="h-5 w-5 text-blue-500" />
            <p className="text-lg ml-3 text-gray-700">Quote</p>
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="h-5 w-5 text-blue-500" />
            <p className="text-lg ml-3 text-gray-700">Call Back</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button
            className="px-10 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterContainer
