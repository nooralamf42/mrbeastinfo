'use client'

import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from 'next/link';
import React from 'react';

interface MerchCategory {
  title: string;
  items: string[];
}

const MerchMenu = () => {

  const categories: MerchCategory[] = [
    {
      title: "Outerwear",
      items: ["Hoodies", "Jackets", "Anorak"]
    },
    {
      title: "Tops",
      items: ["Tee-shirts", "Rugby shirt", "Baseball Jersey", "Tank Tops"]
    },
    {
      title: "Bottoms",
      items: ["Joggers", "Swim Shorts"]
    },
    {
      title: "Headwear",
      items: ["Hats", "Sun Hats", "Beanie"]
    },
    {
      title: "Accessories",
      items: ["Nalgene", "Wristbands"]
    },
    {
      title: "Others",
      items: ["Socks", "Beast Pillow"]
    },
    {
      title: "Collectibles",
      items: ["Backpacks", "Beast Logo Flags"]
    }
  ];

  return (
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold text-center mb-12">
          MERCH AT SHOP MRBEAST
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-500/30 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/20"
            >
              <h2 className="text-xl font-bold mb-4 text-secondary">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="transition-all duration-200 hover:text-blue-300 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link className='block text-center mt-5' target="_blank" href={'https://www.mrbeastburger.com/'}><RainbowButton className='text-white/90 mx-auto font-bold text-xl px-8 py-6 tracking-wider'>SHOP NOW</RainbowButton></Link>
      </div>
    </div>
  );
};

export default MerchMenu;