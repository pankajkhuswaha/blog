import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between px-[20vw] max-sm:px-[5vw] p-2 bg-gray-900 items-center'>
          <Link href={'/'} className='w-80'>
            <Image
              src='/logo.png'
              alt='logo'
              width={80} height={40}
              // {{width: "auto",  height: "auto"}}
            />
          </Link>
          <div className='flex gap-2 text-md text-white'>
            <Link href={'/'}>Home</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
          </div>
        </nav>
    </>
  )
}

export default Header