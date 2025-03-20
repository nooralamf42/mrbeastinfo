'use client'

import { NumberTicker } from '@/components/magicui/number-ticker';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from 'next/link';

const MrBeastBurgerMenu = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-100">
          Finger  on the app
        </h1>

        <div className='text-center text-lg tracking-loose leading-relaxed p-4 backdrop-blur-md w-fit mx-auto rounded-xl bg-black/50 text-white'>
            <p>Keep your finger on the app the longest <br/>for a chance to win up to <br/>  <NumberTicker
      value={2500}
      className="whitespace-pre-wrap text-4xl lg:text-8xl font-medium tracking-tighter text-white"
    /> <span className='text-4xl lg:text-8xl'>$</span></p>
        </div>
     <Link className='inline-block' target="_blank" href={'https://fingeronthe.app/'}><RainbowButton className='text-white/90 mx-auto font-bold text-xl px-8 py-6 tracking-wider'>DOWNLOAD APP</RainbowButton></Link>
     </div>
    </div>
  );
};

export default MrBeastBurgerMenu;