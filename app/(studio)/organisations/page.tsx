import Link from 'next/link'
import React from 'react'

export default function page() {
    const links = [
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
    ]
  return (
    <div className='container mx-auto px-5 text-center my-20 bg-black/50 p-10 rounded'>
        <h1 className="text-3xl text-white">Organisations</h1>
        <div className="flex-col flex text-2xl gap-3 text-neutral-100 mt-7">
        {
            links.map(link=><Link className='hover:text-primary duration-200' href={link.href} key={link.name}>{link.name}</Link>)
        }
        </div>
    </div>
  )
}
