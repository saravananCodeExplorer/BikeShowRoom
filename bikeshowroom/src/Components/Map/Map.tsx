import React from 'react'

const Map = () => {
  return (
    <div className="Location py-8 px-4">
      <h1 className="uppercase text-center text-4xl font-bold bg-gray-800 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer animate-fadeIn p-1 rounded-lg w-4/5 mx-auto">
Our Location
</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10926601249!2d78.60662586477657!3d10.81583372817483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1724002287635!5m2!1sen!2sin"
        height="650"
        loading="lazy"
        className="w-full mt-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        style={{ padding: '10px', boxSizing: 'border-box' }}
      ></iframe>
    </div>
  )
}

export default Map
