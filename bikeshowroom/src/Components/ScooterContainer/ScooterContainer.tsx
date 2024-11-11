// import React from 'react'

// const ScooterContainer = () => {
//     return (
//         <main>
//               <h1 className="uppercase text-center text-4xl font-bold bg-gray-800 text-white hover:shadow-lg
//         hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer animate-fadeIn">
//         Scooter
//       </h1>


//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//     <div className="p-4 mx-auto animate-fade-in hover:animate-scale-up">
//         <img 
//             src='https://static.wixstatic.com/media/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png' 
//             className="transition-transform duration-500 hover:scale-110"
//         />
//     </div>
//     <div className="p-4 mx-auto animate-fade-in hover:animate-scale-up">
//         <img 
//             src='https://static.wixstatic.com/media/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png' 
//             className="transition-transform duration-500 hover:scale-110"
//         />
//     </div>
//     <div className="p-4 mx-auto animate-fade-in hover:animate-scale-up">
//         <img 
//             src='https://static.wixstatic.com/media/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png' 
//             className="transition-transform duration-500 hover:scale-110"
//         />
//     </div>
// </div>

//         </main>
//     )
// }

// export default ScooterContainer

import React, { useState } from 'react';

const ImageCarousel = () => {
    // Array of image URLs
    const images = [
        'https://static.wixstatic.com/media/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_03f8ee74d69845389b72ad85184531dd~mv2.png',
        'https://static.wixstatic.com/media/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_560e0e35d6da40bf96b2bf311222166d~mv2.png',
        'https://static.wixstatic.com/media/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/c1981a_8237d6179ac94ce4af51f0138475bf62~mv2.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Handle next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Image display */}
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
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
            >
                &#9664;
            </button>

            {/* Right arrow */}
            <button 
                onClick={handleNext} 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
            >
                &#9654;
            </button>
        </div>
    );
};

export default ImageCarousel;
