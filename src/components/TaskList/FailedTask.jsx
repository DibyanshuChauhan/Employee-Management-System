import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="mt-4">
                <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 shadow-lg">
                    Failed
                </button>
            </div>

        </div>
    )
}

export default FailedTask