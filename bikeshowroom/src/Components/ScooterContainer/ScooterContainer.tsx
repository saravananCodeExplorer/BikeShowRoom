

import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const ScooterContainerMain = () => {
    return (
        <main>
          


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <div className="p-4 mx-auto animate-fade-in hover:animate-scale-up">
        <img 
            src='https://static.wixstatic.com/media/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png' 
            className="transition-transform duration-500 hover:scale-110"
        />
    </div>
    <div className="p-4 mx-auto animate-fade-in hover:animate-scale-up">
        <img 
            src='https://static.wixstatic.com/media/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png' 
            className="transition-transform duration-500 hover:scale-110"
        />
    </div>
    <div className="p-4 mx-auto animate-fade-in hover:animate-scale-up">
        <img 
            src='https://static.wixstatic.com/media/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png' 
            className="transition-transform duration-500 hover:scale-110"
        />
    </div>
</div>

        </main>
    )
}


const ScooterContainer = () => {
   
    
    const images = [
        'https://static.wixstatic.com/media/c1981a_04ac7b3356f0428f839fd1cbfc039a13~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_04ac7b3356f0428f839fd1cbfc039a13~mv2.png',
        'https://static.wixstatic.com/media/c1981a_d12aecb71fb54ee98488f95c1be71778~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_d12aecb71fb54ee98488f95c1be71778~mv2.png',
        'https://static.wixstatic.com/media/c1981a_e18653f60ecd4ae995a5644b32e285bb~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_e18653f60ecd4ae995a5644b32e285bb~mv2.png',
        'https://static.wixstatic.com/media/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png',
        'https://static.wixstatic.com/media/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png',
        'https://static.wixstatic.com/media/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main>
                <ScooterContainerMain/>
        <div className="relative w-full max-w-md mx-auto">
        
            <div className="p-4 mx-auto">
                <img 
                    src={images[currentIndex]} 
                    alt="carousel image" 
                    className="w-full rounded-lg transition-opacity duration-500"
                />
            </div>
            
            {/* Left arrow */}
            <button 
                onClick={handlePrev} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-colors"
            >
                <FiChevronLeft size={24} />
            </button>

            {/* Right arrow */}
            <button 
                onClick={handleNext} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-colors"
            >
                <FiChevronRight size={24} />
            </button>
        </div>
        </main>
    );
};

export default ScooterContainer;


