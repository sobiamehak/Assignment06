import React from 'react'
import Image from 'next/image'

const Customer = () => {
  return (
    <div className=''>
      <div>
        <h1 className='font-bold text-5xl ml-9 mt-[60px] justify-center text-center'>Customer Testimonials</h1>
        <p className='py-[60px] justify-center text-center'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
      </div>   
        
         <div className='justify-center items-center gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
             {/* review 1 */}
<div className='max-w-[365px] h-[325px] border-2 border-black pl-6 '>
<Image src="/5stars.svg" alt="" 
width={120} height={20} className='pt-8'/>
<p className='pt-8'>Lorem ipsum dolor, sit amet  give <br />consectetur  adipisicing elit. <br />
Possimus, quia? Lorem, ipsum <br /> dolor Lorem ipsum dolor sit..<br />
 Lorem ipsum dolor sit amet.</p>
 <div className='flex  '>
 <Image src="/image3.png" alt="man" 
        width={56}
        height={56} className='rounded-full'/>
        <div className='flex-col ml-2'>
        <h2 className='font-bold'>Jemes Nkudu</h2>
        <p className=''>Software Developer</p>
        </div>
        </div>
      </div>
      


             {/* review 2 */}
<div className='max-w-[365px] h-[325px] border-2 border-black pl-6 hidden md:block'>
<Image src="/5stars.svg" alt="" 
width={120} height={20} className='pt-8'/>
<p className='pt-8'>Lorem ipsum dolor, sit amet  give <br />consectetur  adipisicing elit. <br />
Possimus, quia? Lorem, ipsum <br /> dolor Lorem ipsum dolor sit..<br />
 Lorem ipsum dolor sit amet.</p>
 <div className='flex  '>
 <Image src="/image4.png" alt="man" 
        width={56}
        height={56} className='rounded-full'/>
        <div className='flex-col ml-2'>
        <h2 className='font-bold'>Erick Kipkemboi</h2>
        <p className=''>Web Designer</p>
        </div>
        </div>
      </div>


             {/* review 3 */}
<div className='max-w-[365px] h-[325px] border-2 border-black pl-6 hidden md:block'>
<Image src="/5stars.svg" alt="" 
width={120} height={20} className='pt-8'/>
<p className='pt-8'>Lorem ipsum dolor, sit amet  give <br />consectetur  adipisicing elit. <br />
Possimus, quia? Lorem, ipsum <br /> dolor Lorem ipsum dolor sit..<br />
 Lorem ipsum dolor sit amet.</p>
 <div className='flex  '>
 <Image src="/image5.png" alt="man" 
        width={56}
        height={56} className='rounded-full'/>
        <div className='flex-col ml-2'>
        <h2 className='font-bold'>Stephen kerubo</h2>
        <p className=''>President of Sales </p>
        </div>
        </div>
      </div>
     
      </div>
      <div className='flex'>
        <Image src="/Slider Dots.svg" alt="dots"
        width={82} height={10} className='ml-10' />

<Image src="/Slider Buttons.svg" alt="dots"
        width={115} height={50} className='ml-auto mr-10' />
      </div>
    </div>
  )
}

export default Customer
