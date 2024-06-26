import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
import CountryLookup from './CountryLookup';

export default function HomeHeader() {
  
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className="flex space-x-4 items-center">
        <CountryLookup/>
            <Link href="https://mail.google.com" className='hover:text-blue-950 font-medium'>
                Gmail
            </Link> 
            {/* <button className='bg-primary text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button> */}
        </div>
    </header>
  )
}