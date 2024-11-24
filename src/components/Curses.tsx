import React from 'react'
import Image from 'next/image'

const Curses = () => {
    return (
        <div>
            <div className='  flex  justify-center'>
                <div>
                <h1 className='font-bold lg:text-5xl text-2xl text-center mb-10'>Courses</h1>
                <p className='text-xl'>Your Ultimate Guide to learning</p>
                </div>
              
            </div> 
            <div className=' flex gap-4 justify-center items-center mx-auto mt-20'>
                <h1 className='underline'>Popular</h1>
                <h1>Recommandation</h1>
                <h1>Best Price</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:ml-[120px] '>
                {/* first card */}
                <div className='max-w-[416px] h-[534px] bg-[#f7f7f7] mt-10 px-4'>
                    <Image src="/pic1.jpeg" alt="laptop"
                        width={416} height={300} />
                    <h1 className='flex mt-5 text-xl'>dessign
                        <Image src="/Star.svg" alt="rate"
                            height={24} width={48} className='ml-auto' />
                    </h1>
                    <h1 className='font-bold text-[20px]'>UX/UI Design 201</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Quaerat, consequuntur?</p>
                    <button className='w-[117px] h-[40px] border-[1px] border-black rounded mt-8'>Enroll Now</button>
                    <button className='ml-8 text-[16px]'>$400</button>
                </div>
                {/* 2nd card */}
                <div className='max-w-[416px] h-[534px] bg-[#f7f7f7] mt-10 px-5'>
                    <Image src="/pic2.jpeg" alt="laptop"
                        width={416} height={300} />
                    <h1 className='flex mt-5 text-xl'>Programming
                        <Image src="/Star.svg" alt="rate"
                            height={24} width={48} className='ml-auto' />
                    </h1>
                    <h1 className='font-bold text-[20px]'>Introduction to Python</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Quaerat, consequuntur?</p>
                    <button className='w-[117px] h-[40px] border-[1px] border-black rounded mt-8'>Enroll Now</button>
                    <button className='ml-8 text-[16px]'>$400</button>
                </div>
                {/* 3rd card */}
                <div className='max-w-[416px] h-[534px] bg-[#f7f7f7] mt-10 px-5'>
                    <Image src="/pic3.jpeg" alt="laptop"
                        width={416} height={300} />
                    <h1 className='flex mt-5 text-xl'>Business
                        <Image src="/Star.svg" alt="rate"
                            height={24} width={48} className='ml-auto' />
                    </h1>
                    <h1 className='font-bold text-[20px]'>Data Analysis for Biginners</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Quaerat, consequuntur?</p>
                    <button className='w-[117px] h-[40px] border-[1px] border-black rounded mt-8'>Enroll Now</button>
                    <button className='ml-8 text-[16px]'>$400</button>
                </div>
                {/* 4th card */}
                <div className='max-w-[416px] h-[534px] bg-[#f7f7f7] mt-10 px-5 hidden md:block'>
                    <Image src="/pic4.jpeg" alt="laptop"
                        width={416} height={300} />
                    <h1 className='flex mt-5 text-xl'>Art
                        <Image src="/Star.svg" alt="rate"
                            height={24} width={48} className='ml-auto' />
                    </h1>
                    <h1 className='font-bold text-[20px]'>Art Specialization</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Quaerat, consequuntur?</p>
                    <button className='w-[117px] h-[40px] border-[1px] border-black rounded mt-8'>Enroll Now</button>
                    <button className='ml-8 text-[16px]'>$400</button>
                </div>
                {/* 5th card */}
                <div className='max-w-[416px] h-[534px] bg-[#f7f7f7] mt-10 px-5 hidden md:block'>
                    <Image src="/pic5.jpeg" alt="laptop"
                        width={416} height={300} />
                    <h1 className='flex mt-5 text-xl'>Law
                        <Image src="/Star.svg" alt="rate"
                            height={24} width={48} className='ml-auto' />
                    </h1>
                    <h1 className='font-bold text-[20px]'>Rule of Law</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Quaerat, consequuntur?</p>
                    <button className='w-[117px] h-[40px] border-[1px] border-black rounded mt-8'>Enroll Now</button>
                    <button className='ml-8 text-[16px]'>$400</button>
                </div>
                {/* 6th card */}
                <div className='max-w-[416px] h-[534px] bg-[#f7f7f7] mt-10 px-4 hidden md:block'>
                <Image src="/pic2.jpeg" alt="laptop"
                        width={416} height={300} />
                   
                    <h1 className='flex mt-4 text-xl'>Tech
                        <Image src="/Star.svg" alt="rate"
                            height={24} width={48} className='ml-auto' />
                    </h1>
                    <h1 className='font-bold text-[20px]'>Introduction to webflow</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Quaerat, consequuntur?</p>
                    <button className='w-[117px] h-[40px] border-[1px] border-black rounded mt-8'>Enroll Now</button>
                    <button className='ml-8 text-[16px]'>$400</button>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-44'>

                <button className='py-5 px-10 border-2 rounded-md '>View all Courses</button>
            </div>


        </div>
    )
}

export default Curses
