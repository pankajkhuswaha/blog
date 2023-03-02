import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full h-fit items-center flex flex-col  justify-center text-white bg-gray-800 mt-10'>
      <div className="flex m-2">
      Made with <img src='/heart.png' className='w-5 h-5'/> By Devloper Brother's 
      </div>
      {/* <div className="SECOND">
      copyright {new Date().getFullYear()} Devloper Brother's 
      </div>        */}
    </div>
    </>
  )
}

export default Footer