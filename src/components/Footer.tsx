
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            {/* parent div */}
 <div className="max-w-screen-xl mx-auto h-auto mt-20 px-4 lg:h-[790px]">
                {/* parent child div */}
   <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    {/* top childs */}
    <div className="mb-6 lg:mb-0 lg:w-1/2 text-center lg:text-left">
       <h3 className="font-bold text-lg lg:text-xl pl-0 lg:pl-10 mb-5 lg:mb-0">
  Subscribe to our newsletter    </h3>
  <p className="text-sm lg:text-base mt-0 lg:mt-2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.   </p>
 </div>
 <div className="flex flex-col lg:flex-row w-full lg:w-[500px] items-center lg:items-start"> 
    <div className="w-full lg:w-auto">  <input
    type="text"
   placeholder="Enter Your Email"
 className="border-2 border-black w-full lg:w-[280px] h-[45px] rounded p-5 mb-0 lg:mb-4"
  />
    <button className="border-2 border-black w-full lg:w-[119px] h-[48px] rounded lg:ml-4
     lg:mt-0 mt-5">
  Subscribe
 </button>

     <p className="text-xs lg:text-left lg:ml-auto lg:mr-10 lg:mt-0 mt-5 text-center">
         By subscribing you agree to with our Privacy Policy
     </p>
     </div>
                      
     </div>
     </div>

                {/* second parent div */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-center lg:text-center">
                    <div className="flex justify-center lg:justify-start">
                        <Image src="/Ddsgnr Library.svg" alt="logo" height={200} width={200} />
                    </div>

                    <div>
                        <ul>
                            <li className="font-bold text-lg lg:text-xl">Courses</li>
                            <li className="mt-2">Business</li>
                            <li className="mt-2">Development</li>
                            <li className="mt-2">Technology</li>
                            <li className="mt-2">Design</li>
                            <li className="mt-2">Programming</li>     </ul>
                    </div>

                    <div>
                        <ul>

                            <li className="font-bold text-lg lg:text-xl">Resources</li>
                            <li className="mt-2">Career</li>
                            <li className="mt-2">Resume</li>
                            <li className="mt-2">Learning</li>
                            <li className="mt-2">Interview preparation</li>
                            <li className="mt-2">Jobs</li>
                        </ul>
                    </div>




                    <div>
                        <ul>
                            <li className="font-bold text-lg lg:text-xl">About</li>
                            <li className="mt-2">Contact</li>
                            <li className="mt-2">Help/Support</li>
                            <li className="mt-2">FAQ</li>
                            <li className="mt-2">Terms and conditions</li>
                            <li className="mt-2">Partners</li>
                        </ul>
                    </div>
   </div>



<hr className="border-black my-20" />

                {/* last */}
   <div className='mt-20 lg:text-left text-center lg:flex justify-between items-center '>

                   
  <div className='lg:flex flex-col lg:flex-row justify-between items-center gap-20'>
   <div>
  <p className='mt-5 lg:mt-0 '>2023 Ddsgnr. All right reserved.</p>
  </div>

 <div className='flex text-xs lg:text-xl justify-between lg:justify-start mt-5 lg:mt-0 underline gap-10 lg:no-underline'>
 <p>Privacy Policy</p>
 <p>Terms of Service</p>
<p>Cookies Setting</p>
                    
                    
                    
                    
   </div>
                    </div>


   <div className='flex justify-center lg:items-center h-10 lg:justify-start items-center '>
       <Image src="/Socialinks.svg" width={150} height={150} alt="sobia"
                            className=' lg:pt-0 pt-4' />
 </div >



                   

  </div>
  </div>
        </footer>
    );
};

export default Footer

