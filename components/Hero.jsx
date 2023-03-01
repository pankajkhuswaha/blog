import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import PK from '@/public/pk';

const Hero = ({blogs}) => {
    const color ="#ffff"
    const latest = blogs?.splice(0,3)
    // let latest =[]
return (
    <>
        <div className="flex flex-wrap sm:px-[20vw] mx-[5vw] p-4">
            <div className='flex gap-4 flex-col items-center justify-between w-full '>
            <div className='w-64 h-44 sm:h-fit rounded-xl overflow-hidden border-2'>
            <Image alt='hero' src='/hero.png' width={800} height={80}/>
            </div> 
            <h1 className='text-3xl pb-2'>{"<Blogs for coder/>"}</h1>
            <p className='pb-4 w-full '>Welcome to the blog of Pankaj where you can get the update of all Kind the technologie which help to update with latest technology Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum molestiae neque vero, odit, iure officia minima nihil ab libero veritatis fugit dolor nam in minus tempore unde suscipit perferendis.</p>
            </div>
            
            </div>
            <div className='w-full'>
                <h1 className='text-3xl text-center w-full'>Latest Blogs</h1>
            </div>
            {
        latest?.map((ele, i) => {
          return (
            <Link key={i} href={`/blogs/${ele?.name}`} className="blog_card max-sm:flex-wrap items-center  mx-[20vw] max-sm:mx-[5vw] mt-6 border-2 sm:gap-12 flex rounded-lg">
              <div className="img_container m-4 border-2"><Image alt='blog-tittle-image' className='border-2 border-gray-600 rounded-lg' src={`/images/${ele?.name}.png`}width={400} height={30} /></div>
              <div className='flex flex-col justify-center p-4'>
                <h1 className='text-3xl mb-4'>{ele?.title}</h1>
                <div>{ele?.description?.substr(0,130)} .... <button className='text-blue-600'>Read More</button> </div>
              </div>
            </Link>
          )
        })
      }

       
    </>
)}
export default Hero
