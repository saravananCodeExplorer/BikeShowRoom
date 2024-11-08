import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { HeroSlider } from './Components/HeroSlider/HeroSlider'
import OfferContainer from './Components/OfferContainer/OfferContainer'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import MotorBikeContainer from './Components/MotorBikeContainer/MotorBikeContainer'
import ScooterContainer from './Components/ScooterContainer/ScooterContainer'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import RegisterContainer from './Components/RegisterContainer/RegisterContainer'

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Navbar />
      <HeroSlider />
      <OfferContainer />
      <MotorBikeContainer />
      <ScooterContainer />
      <About />
      <div className="mt-10">
        <div className="bg-white">
          <img src='https://static.wixstatic.com/media/c1981a_dabb906d39ba494fbd9071c6581ca421~mv2.png/v1/fill/w_1608,h_743,al_c,q_90,enc_auto/c1981a_dabb906d39ba494fbd9071c6581ca421~mv2.png' />
        </div>
      </div>
      <div className="mt-10 text-center text-4xl">
        <h1>Follow Us On</h1>
        <div className="flex justify-center mt-6">
          <div className="">
            <img src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png' />
          </div>
          <div className="">
            <img src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png' />
          </div>
          <div className="">
            <img src='https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/78aa2057f0cb42fbbaffcbc36280a64a.png' />
          </div>
        </div>
        <div className="flex justify-center">
         
          <img src='https://static.wixstatic.com/media/c1981a_3cde523f7edd446296cf1ba4f540bd52~mv2.png/v1/fill/w_463,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Guna%20motors%20-%2013_03_edited.png' />
        </div>
        <RegisterContainer />
      </div>
      <h1 className='text-4xl text-center my-8'>Our Showrooms</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10926601249!2d78.60662586477657!3d10.81583372817483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1724002287635!5m2!1sen!2sin" height="650" loading="lazy" className='w-full'></iframe>
      <Footer />
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © 2024 All Rights Reserved. Copyright by Guna Motors Yamaha
        </p>
      </footer>
      
      {/* <div className="m-5">
        <h2 className="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
        <button data-act-class="shadow-outline" data-set-theme="" className="bg-green-700 focus:outline-none m-1 rounded p-2">Default</button>
        <button data-act-class="shadow-outline" data-set-theme="dark" className="bg-green-700 focus:outline-none m-1 rounded p-2">Dark</button>
        <button data-act-class="shadow-outline" data-set-theme="black" className="bg-green-700 focus:outline-none m-1 rounded p-2">Black</button>
        <button data-act-class="shadow-outline" data-set-theme="🌸" className="bg-green-700 focus:outline-none m-1 rounded p-2">🌸 Pink</button>
        <button data-act-class="shadow-outline" data-set-theme="🐬" className="bg-green-700 focus:outline-none m-1 rounded p-2">🐬 Blue</button>
        <button data-act-class="shadow-outline" data-set-theme="🐤" className="bg-green-700 focus:outline-none m-1 rounded p-2">🐤 Yellow</button>
      </div> */}
    </>
  )
}

export default App
