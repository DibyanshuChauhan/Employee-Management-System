// import React from 'react'
// import Header from '../others/Header'

// const AdminDashboard = () => {
//     return (
//         <div className='h-screen w-full p-10'>
//             <Header />

//             <div>
//                 <form className='flex w-full flex-wrap items-start justift-between '>
//                     <div className='w-1/2'>
//                         <div>
//                             <h3>Task Title</h3>
//                             <input type="text" placeholder='Make a UI design' />
//                         </div>
//                         <div>
//                             <h3>Date</h3>
//                             <input type="date" />
//                         </div>

//                         <div>
//                             <h3>Asign to</h3>
//                             <input type="text" placeholder='Employee Name' />
//                         </div>

//                         <div>
//                             <h3>Category</h3>
//                             <input type="text" placeholder='design, dev, etc' />
//                         </div>
//                     </div>

//                     <div className='w-1/2'>
//                         <h3>Description</h3>
//                         <textarea name="" id="" cols="30" rows="10" ></textarea>
//                     </div>
//                     <button>Create Task</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AdminDashboard

import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full bg-gray-100 dark:bg-gray-900 p-10">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
