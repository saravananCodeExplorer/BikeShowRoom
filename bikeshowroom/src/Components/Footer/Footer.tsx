import React from 'react'

const Footer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="text-center md:mt-36 font-bold text-2xl">GUNA YAMAHA</div>
            <div className="p-4 text-center">
                <h1 className='text-lg uppercase font-bold'>Quick Navigation</h1>
                <div className="mt-5">
                    <p className='uppercase font-bold'>Home</p>
                    <p className='uppercase font-bold mt-3'>Service</p>
                    <p className='uppercase font-bold mt-3'>offers</p>
                    <p className='uppercase font-bold mt-3'>EMI</p>
                    <p className='uppercase font-bold mt-3'>Blog</p>
                    <p className='uppercase font-bold mt-3'>Locations</p>
                    <p className='uppercase font-bold mt-3'>Contact</p>
                    <p className='uppercase font-bold mt-3'>Feedback</p>
                </div>
            </div>
            <div className="p-4 text-center">
                <h1 className='text-lg uppercase font-bold'>Bikes</h1>
                <div className="mt-5">
                    <p className='uppercase font-bold'>MT-15v2.0</p>
                    <p className='uppercase font-bold mt-3'>Fz-fi</p>
                    <p className='uppercase font-bold mt-3'>fz-i-fi</p>
                    <p className='uppercase font-bold mt-3'>fz-x</p>
                    <p className='uppercase font-bold mt-3'>r15v4</p>
                    <p className='uppercase font-bold mt-3'>r15m</p>
                    <p className='uppercase font-bold mt-3'>Contact</p>
                    <p className='uppercase font-bold mt-3'>ri5s</p>
                </div>
            </div>
            <div className="p-4 text-center">
                <h1 className='text-lg uppercase font-bold'>Scooters</h1>
                <div className="mt-5">
                    <p className='font-bold'>Aerox 155</p>
                    <p className='uppercase font-bold mt-3'>Facino 125 Fi</p>
                    <p className='uppercase font-bold mt-3'>RAYZR 125 Fi</p>
                    <p className='uppercase font-bold mt-3'>RAYZR Street Rally 125 Fi</p>
                </div>
            </div>
        </div>
    )
}

export default Footer