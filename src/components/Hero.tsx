
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  font-myfon ">



      <div className='flex lg:flex-row flex-col gap-10 justify-center items-center '>


        <div className=''>

          {/* text */}
          <div className="text-center lg:text-center  pt-[80px] lg:pt-[300px]  ">
            <h1 className="text-4xl lg:text-5xl font-bold  lg:ml-[96px] font-myfont">
              Learn new skills <br /> online with ease
            </h1>
            <p className=" p-4 lg:ml-24 ">
              Discover a wide range of courses covering a variety of <br className="hidden lg:block" />
              subjects, taught by expert instructors.
            </p>

          </div>


          {/* buttons  */}
          <div className='flex justify-between lg:justify-start  gap-1 lg:gap-10 items-center lg:ml-24 '>
            <button className='border-2 py-3 px-[16px] rounded-[8px]  lg:h-[48px] lg:w-[198px]
            lg:text-xl bg-black text-white  ml-5 text-sm whitespace-nowrap md:text-base'>
              Start Learning now </button>

            <button className="border-2 py-3 px-[14px] 
             rounded-[5px]   lg:h-[48px] lg:w-[178px] lg:text-xl mr-5 text-sm whitespace-nowrap md:text-base ">Explore Courses</button>
          </div>

        </div>


        {/* images */}
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

    </div>
  );
};

export default Hero



