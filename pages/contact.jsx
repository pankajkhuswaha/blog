import React, { useState } from 'react'

const Contact = () => {
    const intial = { name: '', email: '', desc: '' }
    const [values, setValues] = useState(intial);
    const { name, email, desc } = values
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(name!==''&&email!==''&&desc!==''){
            fetch('http://localhost:3000/api/contactapi', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        }).then(res => res.text()).then(() => { setMessage("Data Send sucessfully"); }).catch((err) => console.log(err))
        setValues(intial)
        setMessage('')
        }
        else{
            setMessage("! Please fill all the fields")
        }
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
                        <label>Enter Your Email :</label>
                        <input value={email} onChange={(e) => setValues({ ...values, email: e.target.value })} className='border-2 p-2' type="email" />
                    </div><div className='flex flex-col gap-2'>
                        <label>Enter Your Description :</label>
                        <textarea value={desc} onChange={(e) => setValues({ ...values, desc: e.target.value })} className='border-2' />
                    </div>
                   <p className='text-center p-2 text-xl text-red-600'>{message && message}</p>

                    <button className='p-2 mt-4 bg-gray-600 text-white text-xl rounded-md' type="submit">Send</button>
                </form>
            </div>

        </>
    )
}

export default Contact