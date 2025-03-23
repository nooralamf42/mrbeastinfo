import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
        <Link href={'/mr-beast-games'}>
        <Image className='md:w-[525px] w-[308px] md:text-left max-sm:mx-auto max-sm:px-10 mx-20 mt-10' alt='mr beast games logo' width={50} height={20} src='/images/logoBeastGames.webp'/>
        </Link>
    </header>
  )
}
