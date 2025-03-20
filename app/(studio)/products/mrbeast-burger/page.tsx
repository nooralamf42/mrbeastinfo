'use client'

import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Cookie, 
  Sandwich, 
  CircleDollarSign,
  ChefHat,
} from 'lucide-react';
import { FaHamburger } from 'react-icons/fa';
import Link from 'next/link';
import { RainbowButton } from '@/components/magicui/rainbow-button';

const MenuItem = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
  <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
    <Icon size={18} />
    <span>{text}</span>
  </div>
);

const MrBeastBurgerMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const menuCategories = [
    { name: 'Combos', icon: CircleDollarSign },
    { name: 'Burgers', icon: FaHamburger },
    { name: 'Sandwiches', icon: Sandwich },
    { name: 'Sides', icon: UtensilsCrossed },
    { name: 'Desserts', icon: Cookie }
  ];

  const styles = [
    { name: 'Beast Style', icon: ChefHat },
    { name: 'Chris Style', icon: ChefHat },
    { name: "Karl's Grilled Cheese", icon: ChefHat },
    { name: 'Chandler Style', icon: ChefHat },
    { name: "Shrek's Quesadilla", icon: ChefHat }
  ];

  return (
    <div className="w-full min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary">
          MrBeastBurger
        </h1>

        {/* Menu Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">MENU</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {menuCategories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <MenuItem icon={category.icon} text={category.name} />
                {hoveredCategory === category.name && (
                  <div className="absolute w-full h-0.5 bg-primary bottom-0 left-0 transition-all" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Styles Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center text-secondary">STYLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {styles.map((style) => (
              <div
                key={style.name}
                className="flex items-center gap-3 p-4 rounded-lg backdrop-blur-md 
                         hover:bg-white/10 transition-all cursor-pointer"
              >
                <style.icon size={24} className="text-secondary" />
                <span>{style.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Button */}
        <Link className='block text-center' target="_blank" href={'https://www.mrbeastburger.com/'}><RainbowButton className='text-white/90 mx-auto font-bold text-xl px-8 py-6 tracking-wider'>ORDER NOW</RainbowButton></Link>
      </div>
    </div>
  );
};

export default MrBeastBurgerMenu;