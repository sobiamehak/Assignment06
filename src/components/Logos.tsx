
import React from 'react';
import Image from 'next/image';

const Logos = () => {
  return (
    <div 
      className="bg-[#f7f7f7] flex flex-col md:flex-row  items-center justify-between text-center md:text-left px-4 md:px-10 py-6 h-auto md:h-[228px]"
    >
      {/* Heading */}
      <h5 className="font-bold text-lg md:text-xl mb-4 md:mb-0">
        Trusted by 2000+ companies <br /> worldwide
      </h5>

      {/* Logos Image */}
      <div className="w-full md:w-auto">
        <Image 
          src="/Logos.svg" 
          alt="logos" 
          width={880} 
          height={56} 
          className="max-w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default Logos;


