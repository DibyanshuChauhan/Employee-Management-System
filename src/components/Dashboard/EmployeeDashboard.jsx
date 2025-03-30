import React from 'react'
import Header from '../others/Header'
import TaskListCount from '../others/TaskListCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header data={data} />
            <TaskListCount data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard