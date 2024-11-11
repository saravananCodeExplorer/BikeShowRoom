import React from 'react'

const Footer = () => {
    return (
        <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 animate-fadeIn">
            <div className="text-center md:mt-36 font-bold text-2xl">GUNA YAMAHA</div>
            
            <div className="p-4 text-center animate-fadeIn delay-100">
                <h1 className='text-lg uppercase font-bold'>Quick Navigation</h1>
                <div className="mt-5">
                    {['Home', 'Service', 'Offers', 'EMI', 'Blog', 'Locations', 'Contact', 'Feedback'].map((item, index) => (
                        <p key={index} className='uppercase font-bold mt-3 transition-transform duration-300 hover:scale-110 hover:text-blue-500 cursor-pointer'>{item}</p>
                    ))}
                </div>
            </div>

            <div className="p-4 text-center animate-fadeIn delay-200">
                <h1 className='text-lg uppercase font-bold'>Bikes</h1>
                <div className="mt-5">
                    {['MT-15v2.0', 'Fz-fi', 'fz-i-fi', 'fz-x', 'r15v4', 'r15m', 'Contact', 'ri5s'].map((item, index) => (
                        <p key={index} className='uppercase font-bold mt-3 transition-transform duration-300 hover:scale-110 hover:text-blue-500 cursor-pointer'>{item}</p>
                    ))}
                </div>
            </div>

            <div className="p-4 text-center animate-fadeIn delay-300">
                <h1 className='text-lg uppercase font-bold'>Scooters</h1>
                <div className="mt-5">
                    {['Aerox 155', 'Facino 125 Fi', 'RAYZR 125 Fi', 'RAYZR Street Rally 125 Fi'].map((item, index) => (
                        <p key={index} className='uppercase font-bold mt-3 transition-transform duration-300 hover:scale-110 hover:text-blue-500 cursor-pointer'>{item}</p>
                    ))}
                </div>
            </div>
      
        </div>
        <footer className="bg-gray-800 text-white text-center py-4 border-t-4 border-gray-600 shadow-lg">
  <p className="text-sm tracking-wide hover:text-gray-400 transition-colors duration-300 ease-in-out">
    © 2024 All Rights Reserved. Copyright by 
    <span className="font-semibold text-yellow-400"> Guna Motors Yamaha</span>
  </p>
</footer>

        </main>
    )
}

export default Footer
