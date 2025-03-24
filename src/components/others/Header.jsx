// import React from 'react'

// const Header = () => {
//     return (
//         <div className='flex items-end justify-between p-4 text-white'>
//             <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Divyanshu 👋</span> </h1>
//             <button className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
//         </div>
//     )
// }

// export default Header

import React from 'react';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
            <div className="flex items-end justify-between">
                <h1 className="text-3xl font-bold leading-tight">
                    Welcome Back, <span className="text-4xl">Divyanshu 👋</span>
                </h1>
                <button className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-5 py-2 rounded-lg shadow-md">
                    Log Out
                </button>
            </div>
            <p className="mt-2 text-sm text-gray-200 italic">Stay productive and manage your tasks efficiently!</p>
        </div>
    );
};

export default Header;
