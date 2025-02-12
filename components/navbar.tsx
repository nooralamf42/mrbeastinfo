"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import {motion} from 'motion/react'

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
    subnav: [
      {
        name: "Merch",
        href: "/products/merch",
      },
      {
        name: "MrBeast Burger",
        href: "/products/mrbeast-burger",
      },
      {
        name: "FingerOnTheApp",
        href: "/products/finger-on-the-app",
      },
      {
        name: "MrBeast Bar",
        href: "/products/mrbeast-bar",
      },
    ],
  },
  {
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    name: "Organisations",
    href: "/organisations",
    subnav: [
      {
        name: "Team Trees",
        href: "/organisations/team-trees",
      },
      {
        name: "Team Seas",
        href: "/organisations/team-seas",
      },
      {
        name: "Philanthropy",
        href: "/organisations/philanthropy",
      },
    ],
  },
  {
    name: "Awards",
    href: "/awards",
    subnav: [
      {
        name: "Streamy Awards",
        href: "/awards/streamy-awards",
      },
      {
        name: "Shorty Awards",
        href: "/awards/shorty-awards",
      },
      {
        name: "Kids Choice Awards",
        href: "/awards/kids-choice-awards",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        />
      )}
      <header className="text-white body-font shadow-md text-lg backdrop-blur-md relative z-[9997]">
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="container mx-auto flex md:flex-row flex-row-reverse flex-wrap px-5 py-3 items-center">
          <Link
            href="/"
            className="flex font-semibold text-2xl items-center text-gray-900"
          >
            <span className="text-secondary">Mr</span>
            <span className="text-primary">Beast</span>
          </Link>

          <button
            className="md:hidden mr-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && <Menu size={24} />}
          </button>

          <nav className="ml-auto hidden md:flex items-center justify-center w-auto bg-transparent">
            {links.map((link) => (
              <div
                key={link.name}
                className="mr-5 group relative z-[1000] hover:text-neutral-400 block md:flex md:items-center max-md:font-semibold max-md:ml-4 max-md:mt-3"
              >
                <Link href={link.href} className="flex items-center">
                  {link.name}
                  {link?.subnav && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                {link?.subnav && (
                  <div className="absolute left-0 top-full min-w-[200px] py-2 z-auto invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg mt-2 border border-gray-100">
                      {link.subnav.map((subnav) => (
                        <Link
                          key={subnav.name}
                          href={subnav.href}
                          className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          {subnav.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

import { AnimatePresence } from 'framer-motion';


const SideNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const toggleSubNav = (linkName: string) => {
    setExpandedItems(prev =>
      prev.includes(linkName)
        ? prev.filter(item => item !== linkName)
        : [...prev, linkName]
    );
  };
  
  return (
    <motion.aside
      initial={false}
      animate={{
        translateX: isOpen ? 0 : '-100%',
      }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
      className="w-4/5 fixed left-0 top-0 bottom-0 z-[999999] bg-white shadow-xl"
    >
      <div className="relative md:hidden aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src="/images/sidebar-bg.webp"
          className="object-cover w-full"
          alt="sidebar image"
        />
        <div className="absolute bottom-0 left-0 right-0 ml-6 mb-5 rounded-lg w-fit px-4 py-2 backdrop-blur-xl bg-white/80">
          <h2 className="font-semibold text-xl">
            <span className="text-blue-600">Mr</span>
            <span className="text-red-600">Beast</span>
          </h2>
          <a className="text-blue-600 hover:text-blue-700 text-sm" href="mailto:mrbeast@nightmedia.co">
            mrbeast@nightmedia.co
          </a>
        </div>
      </div>
      <nav className="p-6 space-y-2 bg-white">
        {links.map((link) => (
          <div key={link.name} className="mb-4">
            {link.subnav ? (
              // Render button for items with subnav
              <button
                onClick={() => toggleSubNav(link.name)}
                className="w-full text-left text-gray-800 font-semibold text-lg flex items-center justify-between hover:text-blue-600 transition-colors"
              >
                {link.name}
                <motion.span
                  animate={{ rotate: expandedItems.includes(link.name) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>
            ) : (
              // Render Link for items without subnav
              <Link
                href={link.href}
                className="w-full text-left text-gray-800 font-semibold text-lg flex items-center justify-between hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )}
           
            <AnimatePresence>
              {link?.subnav && expandedItems.includes(link.name) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-4 mt-2 flex flex-col gap-3 py-2">
                    {link.subnav.map((subnav) => (
                      <Link
                        key={subnav.name}
                        href={subnav.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-base pl-2 border-l-2 border-gray-200 hover:border-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {subnav.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
      <button
        className="absolute top-4 right-4 p-2 text-gray-800 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <X size={24} />
      </button>
    </motion.aside>
  );
};