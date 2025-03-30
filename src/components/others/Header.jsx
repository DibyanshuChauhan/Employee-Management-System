import React from 'react';

const Header = () => {

    // const [userName, setuserName] = useState('')

    // if (!data) {
    //     setuserName('Admin')
    // } else {
    //     setuserName(data.firstName)
    // }

    const handleLogout = () => {
        localStorage.setItem('loggedInUser', '')
        window.location.reload()
    }

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
            <div className="flex items-end justify-between">
                <h1 className="text-3xl font-bold leading-tight">
                    Welcome Back, <span className="text-4xl">userName 👋</span>
                </h1>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-5 py-2 rounded-lg shadow-md">
                    Log Out
                </button>
            </div>
            <p className="mt-2 text-sm text-gray-200 italic">Stay productive and manage your tasks efficiently!</p>
        </div>
    );
};

export default Header;
