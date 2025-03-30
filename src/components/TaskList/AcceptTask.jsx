import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-amber-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-green-500 text-white py-2 px-4 text-sm rounded-lg hover:bg-green-600 transition duration-300 shadow-md">
                    Mark as Completed
                </button>
                <button className="bg-red-500 text-white py-2 px-4 text-sm rounded-lg hover:bg-red-600 transition duration-300 shadow-md">
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask