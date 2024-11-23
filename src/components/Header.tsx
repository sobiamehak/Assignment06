 import Image from 'next/image'
 import Link from 'next/link'
 import { MdMenu } from "react-icons/md";


export default function Header() {
  return (
    <div className=' h-[72px]'>

      <header className="flex items-center justify-between
       bg-gray-50 px-4 py-3 border-b-2 border-gray-500">
     
        <div className="flex items-center ">
          <Image
            src="/Ddsgnr Library.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mr-4 ml-10"
          />
        </div>

        <nav className="flex items-center space-x-4 ">
        <div className='md:hidden lg:hidden xl:hidden ml-auto text-2xl'>
      <MdMenu/>
      </div>
          <ul className="hidden md:flex items-center space-x-8 bg-white ">
        
            <li>
              <Link href="/" className="text-gray-900">Home</Link>
            </li>
            <li>
              <Link href="/course" className="text-gray-900">Courses</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-900">Services</Link>
            </li>
            <li>
              <Link href="/achievement" className="text-gray-900">Achievement</Link>
            </li>
            <li>
              <Link href="/aboutus" className="text-gray-900">AboutUs</Link>
            </li>
            <li>
              <Link href="/testimonial" className="text-gray-900">Testimonial</Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-900 border-2 border-black-900 w-[80px] h-[40px] rounded p-2 gap-8">Login</Link>
            </li>
          </ul>
          <Link
            href="/signup"
            className="bg-black text-white py-2 px-4 rounded hidden md:block"
          >
            SignUp
          </Link>
        </nav>
      </header>
      
    </div>
  );
}

