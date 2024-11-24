
import React from 'react'
import Image from 'next/image'

const Course = () => {
  return (
    <div>
      {/* Top section */}
      <div className='my-20'>
        <h2 className='font-bold text-4xl leading-[57.6px] text-center pr-4'>
          Explore Course By Category
        </h2>
        <p className='font-medium text-lg mt-4 text-center'>
          Discover a wide variety of courses covering a range of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {/* Frame 1 */}
        <div className='bg-[#f7f7f7] w-full h-auto flex justify-around items-center p-4'>
          <div>
            <Image src="/fram1.png" alt="" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Design & Development</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 2 */}
        <div className='bg-[#f7f7f7] w-full h-auto flex justify-around items-center p-4'>
          <div>
            <Image src="/Frame2.svg" alt="frame" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Marketing</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 3 */}
        <div className='bg-[#f7f7f7] w-full h-auto flex justify-around items-center p-4'>
          <div>
            <Image src="/Frame 3.svg" alt="" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Development</h1>
            <p>50+ Course Available</p>
          </div>
        </div>


        {/* Frame 4 */}
        <div className='bg-[#f7f7f7] w-full h-auto lg:flex justify-around items-center p-4 hidden md:block '>
          <div>
            <Image src="/Frame 4.svg" alt="frame" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Communication</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 5 */}
        <div className='bg-[#f7f7f7] w-full h-auto lg:flex justify-around items-center p-4 hidden md:block '>
          <div>
            <Image src="/Frame 5.svg" alt="frame" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Digital Marketing</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 6 */}
        <div className='bg-[#f7f7f7] w-full h-auto lg:flex justify-around items-center p-4 hidden md:block'>
          <div>
            <Image src="/Frame 6.svg" alt="frame" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Self Development</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 7 */}
        <div className='bg-[#f7f7f7] w-full h-auto lg:flex justify-around items-center p-4 hidden md:block'>
          <div>
            <Image src="/frame7.svg" alt="frame" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Business</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 8 */}
        <div className='bg-[#f7f7f7] w-full h-auto lg:flex justify-around items-center p-4 hidden md:block'>
          <div>
            <Image src="/frame8.svg" alt="" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Finance</h1>
            <p>50+ Course Available</p>
          </div>
        </div>

        {/* Frame 9 */}
        <div className='bg-[#f7f7f7] w-full h-auto lg:flex justify-around items-center p-4 hidden md:block'>
          <div>
            <Image src="/frame9.svg" alt="" width={100} height={100} className='object-center' />
          </div>
          <div>
            <h1 className='text-center font-bold'>Consulting</h1>
            <p>50+ Course Available</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className='w-full flex justify-center items-center h-44'>
        <button className='py-5 px-10 border-2 rounded-md'>
          View all Courses
        </button>
      </div>
    </div>
  )
}

export default Course

