import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log('Form submitted')
        setemail('')
        setpassword('')
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col items-center justify-center'>
                    <input value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                    <button
                        className='border-none text-white outline-none bg-emerald-600 rounded-full py-3 px-5 text-xl mt-5 cursor-pointer placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login