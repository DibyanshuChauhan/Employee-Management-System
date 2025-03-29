const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design Landing Page",
                "taskDescription": "Create a responsive landing page for the website.",
                "taskDate": "2025-03-25",
                "category": "UI/UX",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Header Bug",
                "taskDescription": "Resolve alignment issues in the website header.",
                "taskDate": "2025-03-24",
                "category": "Bug Fixing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Optimize Images",
                "taskDescription": "Compress and optimize images for faster loading.",
                "taskDate": "2025-03-26",
                "category": "Performance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Implement Dark Mode",
                "taskDescription": "Add dark mode functionality to the website.",
                "taskDate": "2025-03-27",
                "category": "Feature Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest commit and suggest improvements.",
                "taskDate": "2025-03-23",
                "category": "Code Review",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Database Migration",
                "taskDescription": "Migrate database to a new structure.",
                "taskDate": "2025-03-28",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Implement Redux",
                "taskDescription": "Integrate Redux for better state management.",
                "taskDate": "2025-03-30",
                "category": "State Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Mobile Responsiveness",
                "taskDescription": "Adjust layout for better mobile viewing.",
                "taskDate": "2025-03-29",
                "category": "UI Fixes",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "SEO Optimization",
                "taskDescription": "Improve SEO ranking for the website.",
                "taskDate": "2025-04-01",
                "category": "SEO",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Add unit tests for all components.",
                "taskDate": "2025-04-02",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Deploy to Production",
                "taskDescription": "Push the latest build to the production server.",
                "taskDate": "2025-04-05",
                "category": "Deployment",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Integrate Payment Gateway",
                "taskDescription": "Setup Stripe payment gateway for transactions.",
                "taskDate": "2025-04-06",
                "category": "Backend",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}