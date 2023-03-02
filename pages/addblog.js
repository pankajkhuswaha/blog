import React, { useState } from 'react'

const Addblog = () => {
    const intial = { name: '', title: '', content: '' }
    const [values, setValues] = useState(intial);
    const { name, title, content } = values
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://blog-pk.netlify.app/api/addblogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        }).then(res => res.text()).then(() => { setMessage("Data Send sucessfully"); }).catch((err) => console.log(err))
        console.log(values)
    }
    return (
        <>
            <div className='max-sm:mx-[5vw] sm:mx-[20vw] flex flx-col justify-center mt-10'>
                <form onSubmit={(e) => handleSubmit(e)} className='w-96 flex flex-col py-10 rounded-lg shadow-xl p-4 border-2  sm:p-12 sm:w-full justify-center'>
                    <h1 className='text-2xl w-full text-center pb-2'>Contact us</h1>
                    <div className='flex flex-col gap-2 '>
                        <label>Enter Your Name :</label>
                        <input value={name} onChange={(e) => setValues({ ...values, name: e.target.value })} className='border-2 p-2' type="text" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Enter Your title :</label>
                        <input value={title} onChange={(e) => setValues({ ...values, title: e.target.value })} className='border-2 p-2' type="text" />
                    </div><div className='flex flex-col gap-2'>
                        <label>Enter Your contentription :</label>
                        <textarea value={content} onChange={(e) => setValues({ ...values, content: e.target.value })} className='border-2' />
                    </div>
                    <p className='text-center p-2 text-xl text-red-600'>{message && message}</p>

                    <button className='p-2 mt-4 bg-gray-600 text-white text-xl rounded-md' type="submit">Send</button>
                </form>
            </div>

        </>
    )
}

export default Addblog