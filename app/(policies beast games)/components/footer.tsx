import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full relative">
      <div className='clip-custom bg-black w-full h-24 absolute top-0 z-50 mt-[-95px]'></div>

      <div className="max-w-[1500px] mx-auto px-4 py-12">
      <Link href={'/mr-beast-games'} className="">
            <Image 
              src="/images/logobeastGamesNoText.webp" 
              alt="Beast Games Logo" 
              width={500} // Specify width
  height={300}
              className="max-w-[181px] mx-auto"
            />
          </Link>
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left section */}
          <div className="mb-8 md:mb-0 font-semibold mx-sm:text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 anton-regular">Beast Games from MrBeast®</h2>
            <Link href="/participant-privacy-notice" className="text-white hover:text-gray-300 transition border-b text-xl">MrBeast Privacy Policy</Link>
            <span className="text-white"> © 2025</span>
          </div>
          
          {/* Center logo */}
          
          {/* Right section */}
          <div className="text-right max-sm:text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 anton-regular">RESOURCES</h2>
            <ul className="flex flex-col max-sm:items-center text-sm font-medium">
              <li className="">
                <Link href="/data-protection-policy" className="border-b text-white hover:text-gray-300 transition">Data Protection Policy</Link>
              </li>
              <li className="">
                <Link href="/privacy-policy" className="border-b text-white hover:text-gray-300 transition">Private Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="border-b text-white hover:text-gray-300 transition">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;