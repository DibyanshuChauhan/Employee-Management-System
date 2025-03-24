import React from 'react'

const CreateTask = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Admin Dashboard
            </h2>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    Create a New Task
                </h3>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-gray-600 dark:text-gray-300 font-medium">
                                Task Title
                            </label>
                            <input
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 dark:text-gray-300 font-medium">
                                Date
                            </label>
                            <input
                                type="date"
                                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 dark:text-gray-300 font-medium">
                                Assign to
                            </label>
                            <input
                                type="text"
                                placeholder="Employee Name"
                                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 dark:text-gray-300 font-medium">
                                Category
                            </label>
                            <input
                                type="text"
                                placeholder="Design, Dev, etc."
                                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 dark:text-gray-300 font-medium">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
                            placeholder="Task description..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask