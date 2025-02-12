import React from 'react';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from 'next/link';
import { Cookie, Candy, Cherry } from 'lucide-react';

interface FlavorCategory {
  name: string;
  icon: React.ElementType;
}

const MrBeastBar = () => {
  const flavors: FlavorCategory[] = [
    {
      name: "Original Chocolate",
      icon: Cookie
    },
    {
      name: "Quinoa Crunch",
      icon: Candy
    },
    {
      name: "Almond Chocolate",
      icon: Cherry
    }
  ];

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold text-center mb-12">
          MrBeast Bar
        </h1>
        
        <div className="text-center mb-12">
          <h2 className="text-lg lg:text-2xl font-semibold mb-8">FLAVOURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flavors.map((flavor) => (
              <div
                key={flavor.name}
                className="bg-gray-500/30 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/20"
              >
                <div className="flex flex-col items-center gap-4">
                  <flavor.icon size={24} className="text-secondary" />
                  <span className="text-lg font-medium">{flavor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link className='block text-center' target="_blank" href={'https://feastables.com'}>
          <RainbowButton className='text-white/90 mx-auto font-bold text-xl px-8 py-6 tracking-wider'>
            FEASTABLES.COM
          </RainbowButton>
        </Link>
      </div>
    </div>
  );
};

export default MrBeastBar;