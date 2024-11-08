import React from 'react'


const OfferContainer = () => {
    return (
        <main className='py-10'>
<h1 className='uppercase text-center text-4xl font-bold bg-gray-800 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer animate-fadeIn'>
  What We Offer
</h1>

            <div className=" offer-conetnt grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                <div className="p-6 rounded-lg mx-auto">
                    <img  src="https://static.wixstatic.com/media/c1981a_26ed940b8d644f37a21f059bcd4caaba~mv2.png/v1/fill/w_375,h_451,al_c,lg_1,q_85,enc_auto/c1981a_26ed940b8d644f37a21f059bcd4caaba~mv2.png" />
                    <h1 className='text-4xl uppercase font-bold text-center -mt-16'>Motorcycle</h1>
                </div>
                <div className="p-6 rounded-lg mx-auto">
                    <img src='https://static.wixstatic.com/media/c1981a_a1009bcaa5934fff9cf7a26a92b77543~mv2.png/v1/fill/w_375,h_451,al_c,lg_1,q_85,enc_auto/c1981a_a1009bcaa5934fff9cf7a26a92b77543~mv2.png' />
                    <h1 className='text-4xl uppercase font-bold text-center -mt-16'>Scooter</h1>
                </div>
                <div className="p-6 rounded-lg mx-auto">
                    <img src='https://static.wixstatic.com/media/c1981a_95c342ee72504b50bd1b44543d5d4bef~mv2.png/v1/fill/w_375,h_451,al_c,lg_1,q_85,enc_auto/c1981a_95c342ee72504b50bd1b44543d5d4bef~mv2.png' />
                    <h1 className='text-4xl uppercase font-bold text-center -mt-16'>Service</h1>
                </div>
            </div>
        </main>
    )
}

export default OfferContainer