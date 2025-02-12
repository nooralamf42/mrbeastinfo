"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

const MrBeastBurgerMenu = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-center">
        {/* Header */}  
        <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-100">
          Contact 
        </h1>

        <div className="text-center text-lg tracking-loose leading-relaxed p-4 backdrop-blur-md w-fit mx-auto rounded-xl bg-black/50 text-white">
          <p>
            For more information about
            <span className="font-semibold">
              <span className="text-secondary pl-2">Mr</span>
              <span className="text-primary">Beast</span>
            </span>
            <br />
            Please contact{" "}
            <span className="font-semibold">
              <span className="text-secondary">Mr</span>
              <span className="text-primary">Beast</span>
            </span>{" "}
            through the below button
            <br />
          </p>
        </div>
        <Link className='block text-center' href={'mailto:mrbeast@nightmedia.co'} target="_blank">
          <RainbowButton className='text-white/90 mx-auto font-bold text-xl px-8 py-6 tracking-wider'>CONTACT NOW</RainbowButton>
        </Link>
      </div>
    </div>
  );
};

export default MrBeastBurgerMenu;
