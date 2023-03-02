import Image from 'next/image'
import React from 'react'

const About = ({products}) => {
  return (
    <>
      <div className="sm:px-[20vw] px-[5vw] pt-4">

        <div className="w-full my-4"><h1 className='text-center text-2xl border-b-2 shadow-sm mb-4 p-2 border-gray-100 '>About blog</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit impedit quia suscipit deleniti atque enim optio molestias eaque, autem neque amet recusandae fugit quae totam debitis perspiciatis est nesciunt consequatur dicta ab provident animi harum! Quibusdam repudiandae nisi non expedita.</p></div>
      </div>
      <div className="our_products sm:mx-[20vw] mx-[5vw] ">
        <h1 className='text-center text-2xl border-b-2 shadow-sm mb-4 p-2 border-gray-100' >
          <strong>Our Products</strong>
        </h1>
        <div className='gap-9 flex flex-wrap items-center w-full justify-center'>
          {
            products?.map((ele,i)=>{
              return(<>
                <div key={i} className='w-60 h-fit p-4 border-2 shadow-md gap-2 flex flex-col items-center justify-center'>
                  <div className="img_container  overflow-hidden border-2">
                    <Image src={`/products/${ele}.png`} width={200} height={200}/>
                  </div>
                  <p>Blogs About</p>
                  <h2 className='text-2xl capitalize'><strong>{ele}</strong></h2>
                </div>
              </>)
            })
          }
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  let title =context.query.Blogs
  // console.log()
  let product = await fetch("http://blog-pk.netlify.app/api/products")
  let Allproducts = await product.json();
  return {
    props: {products:Allproducts}, // will be passed to the page component as props
  }
}

export default About