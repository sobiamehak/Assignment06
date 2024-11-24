import Image from 'next/image'
import React from 'react'

const Our_team = () => {
  return (
    <section>

      {/* parent  */}
      <div className='bg-[#f7f7f7]'>

        {/* cards  */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
         my-2 gap-4  bg-[#f7f7f7]'>

          <div className='max-w-[400px] h-[210px]  flex justify-center items-center flex-col  '>
            <Image src={"/image1.png"} width={80} height={80} alt='black man'></Image>
            <h4 className='font-bold text-xl mb-2 mt-4 '>Jemes nkudu</h4>
          <p className='mb-4 text-xl'>Markeeting coordinator</p>
          <Image src={"/slinks.svg"} width={80} height={80} alt='black man'></Image>
          </div>

          <div className='max-w-[400px] h-[210px]  flex justify-center items-center flex-col  '>
            <Image src={"/image2.png"} width={80} height={80} alt='black man'></Image>
            <h4 className='font-bold text-xl mb-2 mt-4 '>Joseph Munyambu</h4>
          <p className='mb-4 text-xl'>Nursing assistant</p>
          <Image src={"/slinks.svg"} width={80} height={80} alt='black man'></Image>
          </div>

          <div className='max-w-[400px] h-[210px]  flex justify-center items-center flex-col  '>
            <Image src={"/image3.png"} width={80} height={80} alt='black man'></Image>
            <h4 className='font-bold text-xl mb-2 mt-4 '>Jopseph Ngumbau</h4>
          <p className='mb-4 text-xl'>Medical Assistant</p>
          <Image src={"/slinks.svg"} width={80} height={80} alt='black man'></Image>
          </div>


          <div className='max-w-[400px] h-[210px] lg:flex justify-center items-center flex-col hidden md:block  '>
            <Image src={"/image4.png"} width={80} height={80} alt='black man'></Image>
            <h4 className='font-bold text-xl mb-2 mt-4 '>Erick Kipkemboi</h4>
          <p className='mb-4 text-xl'>Web Designer</p>
          <Image src={"/slinks.svg"} width={80} height={80} alt='black man'></Image>
          </div>


          <div className='max-w-[400px] h-[210px] lg:flex justify-center items-center flex-col hidden md:block '>
            <Image src={"/image5.png"} width={80} height={80} alt='black man'></Image>
            <h4 className='font-bold text-xl mb-2 mt-4 '>Stephen kerubo</h4>
          <p className='mb-4 text-xl'>President of Sales</p>
          <Image src={"/slinks.svg"} width={80} height={80} alt='black man'></Image>
          </div>



          <div className='max-w-[400px] h-[210px] lg:flex justify-center items-center flex-col hidden md:block '>
            <Image src={"/image6.png"} width={80} height={80} alt='black man'></Image>
            <h4 className='font-bold text-xl mb-2 mt-4 '>John leboo</h4>
          <p className='mb-4 text-xl'>Dog Trainer</p>
          <Image src={"/slinks.svg"} width={80} height={80} alt='black man'></Image>
          </div>


        </div>

      </div>
      <div className='w-full flex justify-center items-center h-44'>

<button className='py-5 px-10 border-2 rounded-md '>View all Courses</button>
</div>


    </section>
  )
}

export default Our_team
