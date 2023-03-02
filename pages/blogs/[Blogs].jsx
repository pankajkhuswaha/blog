import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Blogs = ({ Blog }) => {
  // const router = useRouter()
  // const adress = router.query.Blogs
  function createMarkup(data) {
    return { __html: data };
  }
  // console.log(Blog)
  const [blog, setblog] = useState(Blog)
  // * Old method which is used in React
  // useEffect(()=>{
  //   fetch(`http://blog-pk.netlify.app/api/getSingleblog?blog=${adress}`).then((data)=>{
  //     return data.json();
  //   }).then((parsedData)=>{
  //     setblog(parsedData)
  //   })
  // },[])
  return (
    <>
      <div className="blog_detail flex flex-col items-center mx-[20vw] max-sm:mx-[5vw] h-full py-6">
        <h1 className="w-full text-3xl text-center">{blog?.title}</h1>
        <div className=" border-b-2 border-gray-600 h-2 w-1/4 "></div>
        <Image priority='true' alt='Blog_image' src={`/images/${blog?.name}.png`} className='border-2 mt-6 rounded-xl shadow-2xl' width={700} height={400} />
        <div className="border-b-2 m-2 border-dotted h-2 w-1/2 mt-4"></div>
        {/* <p className='w-full p-6'>{blog?.content}</p> */}
        {
          blog?.content && (
            <div dangerouslySetInnerHTML={createMarkup(blog?.content)}></div>
          )
        }
      </div>
      
    </>

  )
};
//* To Generate basic html from apu
export async function getServerSideProps(context) {
  let title = context.query.Blogs
  // console.log(title)
  let blog = await fetch(`http://blog-pk.netlify.app/api/getSingleblog?blogs=${title}`)
  let singleblog = await blog.json();
  // console.log(singleblog)
  return {
    props: { Blog: singleblog }, // will be passed to the page component as props
  }
}

export default Blogs