import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Blog = ({Blogs}) => {
  const [blogs, setBlogs] = useState(Blogs)
  const pathname = useRouter()
  // console.log(pathname)
  // useEffect(() => {
  //   fetch("http://blog-pk.netlify.app/api/getblogs").then((data) => {
  //     return data.json();
  //   }).then((parseddata) => {
  //     setBlogs(parseddata)
  //   })
  // }, []);
  return (
    <>
      {
        blogs.map((ele, i) => {
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
  )
}

export async function getServerSideProps(context) {
  let title =context.query.Blogs
  console.log()
  let blog = await fetch("http://blog-pk.netlify.app/api/getblogs")
  let Allblogs = await blog.json();
  return {
    props: {Blogs:Allblogs}, // will be passed to the page component as props
  }
}


export default Blog