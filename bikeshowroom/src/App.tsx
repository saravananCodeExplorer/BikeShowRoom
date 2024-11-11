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
import Follow from './Components/Follow/Follow'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'



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
      <Follow/>
      <Map/>
      <Footer />

      
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
