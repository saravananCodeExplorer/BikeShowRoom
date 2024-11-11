// import React from 'react'

// const Footer = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//             <div className="text-center md:mt-36 font-bold text-2xl">GUNA YAMAHA</div>
//             <div className="p-4 text-center">
//                 <h1 className='text-lg uppercase font-bold'>Quick Navigation</h1>
//                 <div className="mt-5">
//                     <p className='uppercase font-bold'>Home</p>
//                     <p className='uppercase font-bold mt-3'>Service</p>
//                     <p className='uppercase font-bold mt-3'>offers</p>
//                     <p className='uppercase font-bold mt-3'>EMI</p>
//                     <p className='uppercase font-bold mt-3'>Blog</p>
//                     <p className='uppercase font-bold mt-3'>Locations</p>
//                     <p className='uppercase font-bold mt-3'>Contact</p>
//                     <p className='uppercase font-bold mt-3'>Feedback</p>
//                 </div>
//             </div>
//             <div className="p-4 text-center">
//                 <h1 className='text-lg uppercase font-bold'>Bikes</h1>
//                 <div className="mt-5">
//                     <p className='uppercase font-bold'>MT-15v2.0</p>
//                     <p className='uppercase font-bold mt-3'>Fz-fi</p>
//                     <p className='uppercase font-bold mt-3'>fz-i-fi</p>
//                     <p className='uppercase font-bold mt-3'>fz-x</p>
//                     <p className='uppercase font-bold mt-3'>r15v4</p>
//                     <p className='uppercase font-bold mt-3'>r15m</p>
//                     <p className='uppercase font-bold mt-3'>Contact</p>
//                     <p className='uppercase font-bold mt-3'>ri5s</p>
//                 </div>
//             </div>
//             <div className="p-4 text-center">
//                 <h1 className='text-lg uppercase font-bold'>Scooters</h1>
//                 <div className="mt-5">
//                     <p className='font-bold'>Aerox 155</p>
//                     <p className='uppercase font-bold mt-3'>Facino 125 Fi</p>
//                     <p className='uppercase font-bold mt-3'>RAYZR 125 Fi</p>
//                     <p className='uppercase font-bold mt-3'>RAYZR Street Rally 125 Fi</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer



import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer
