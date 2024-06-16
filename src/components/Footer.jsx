
export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='container mx-auto px-5 py-3 flex flex-col sm:flex-row items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6'>
          <ul className='flex flex-row justify-center space-x-6'>
            <li className='hover:underline cursor-pointer'>Privacy</li>
            <li className='hover:underline cursor-pointer'>Terms</li>
            <li className='hover:underline cursor-pointer'>Settings</li>
          </ul>
        </div>
        <div className='flex items-center mt-3 sm:mt-0'>
          <span className='text-xs text-gray-400'>
            © {new Date().getFullYear()} NexSearch. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
