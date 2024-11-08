import React from 'react'

const RegisterContainer = () => {
  return (
    <div className='mt-10'>
      <div className="bg-white md:w-[100vh] mx-auto px-16 pt-6 py-10 rounded-lg">
        <h1 className='text-center text-xl md:text-4xl text-black font-bold'>Register Now</h1>
        <div className="form mt-10 md:flex items-center ">
            <label className='text-xl text-black'>Name</label>
            <input type='text' className='border ml-3 rounded-lg w-full' />
        </div>

        <div className="form mt-10 md:flex items-center ">
            <label className='text-xl text-black'>Phone</label>
            <input type='text' className='border ml-3 rounded-lg w-full' />
        </div>
 
        <div className="form mt-10 md:flex items-center ">
            <label className='text-xl text-black'>Email</label>
            <input type='text' className='border ml-3 rounded-lg w-full' />
        </div>

        <div className="">
            <p className='text-xl mt-6 text-black'>How can We Help You</p>
            <div className="flex mt-10">
                <input type='checkbox'/>
                <p className='text-lg ml-2 text-black'>Book a Test Drive</p>
            </div>

            <div className="flex ">
                <input type='checkbox'/>
                <p className='text-lg ml-2 text-black'>Availability</p>
            </div>

            <div className="flex ">
                <input type='checkbox'/>
                <p className='text-lg ml-2 text-black'>Quote</p>
            </div>

            <div className="flex ">
                <input type='checkbox'/>
                <p className='text-lg ml-2 text-black'>Call Back</p>
            </div>

            <button className='px-10 py-2 text-lg border rounded-lg text-black'>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default RegisterContainer