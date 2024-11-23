
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row font-myfont">

      <div className="text-center lg:text-left justify-center items-center pt-[80px] lg:pt-[300px] lg:ml-[90px] px-4">
        <h1 className="text-4xl lg:text-6xl font-bold justify-between lg:ml-[44px] font-myfont">
          Learn new skills <br /> online with ease
        </h1>
        <p className="justify-center lg:ml-[40px] lg:text-start p-4">
          Discover a wide range of courses covering a variety of <br className="hidden lg:block" />
          subjects, taught by expert instructors.
        </p>

        <div className="flex justify-center lg:justify-start lg:ml-[66px] space-x-4">
          <button className="rounded-[5px] bg-black text-white py-[12px] px-[24px]">
            Learn Start now
          </button>
          <button className="border-2 py-3 px-6 rounded-[5px]">Explore Courses</button>
        </div>

      </div>
      <div className="flex justify-center lg:ml-auto mt-8 lg:mt-0 object-cover overflow-hidden">
        <Image
          src="/heros.jpeg"
          alt="hero"
          width={640}
          height={900}
          className="w-full lg:w-auto max-w-[400px] lg:max-w-none"
        />

      </div>

    </div>
  );
};

export default Hero



