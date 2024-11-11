import React from 'react';
import RegisterContainer from '../RegisterContainer/RegisterContainer';

const Follow = () => {
  return (
    <div className="FOLLOW p-8">
      <div className="mt-10 bg-white">
        <img
          src="https://static.wixstatic.com/media/c1981a_dabb906d39ba494fbd9071c6581ca421~mv2.png/v1/fill/w_1608,h_743,al_c,q_90,enc_auto/c1981a_dabb906d39ba494fbd9071c6581ca421~mv2.png"
          className="w-full rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
          alt="Banner"
        />
      </div>
      <div className="mt-10 text-center">
      <h1 className="uppercase text-center text-4xl font-bold bg-gray-800 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer animate-fadeIn p-1 rounded-lg w-4/5 mx-auto">
      Follow us on
</h1>
        <div className="flex justify-center mt-6 space-x-8">
          {['01c3aff52f2a4dffa526d7a9843d46ea.png', '0fdef751204647a3bbd7eaa2827ed4f9.png', '78aa2057f0cb42fbbaffcbc36280a64a.png'].map((icon, index) => (
            <img
              key={index}
              src={`https://static.wixstatic.com/media/${icon}`}
              className="w-12 h-12 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              alt={`Social Icon ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
  <img
    src="https://static.wixstatic.com/media/c1981a_3cde523f7edd446296cf1ba4f540bd52~mv2.png/v1/fill/w_463,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Guna%20motors%20-%2013_03_edited.png"
    className="w-80 rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-6 hover:opacity-90 hover:shadow-xl"
    alt="Main Image"
  />
</div>
      <RegisterContainer />

      </div>
    </div>
  );
}

export default Follow;
