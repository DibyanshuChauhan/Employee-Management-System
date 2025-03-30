import React from 'react'

const TaskListCount = ({ data }) => {
    return (
        <div className='flex screen mt-10 justify-between gap-5'>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-cyan-500'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='w-[45%] py-6 px-9 rounded-xl bg-purple-500'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>

            <div className='w-[45%] py-6 px-9 rounded-xl bg-rose-600'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>

            <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListCount