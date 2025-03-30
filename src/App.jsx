import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from '../src/utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, [])

  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (AuthData && AuthData?.admin.find((e) => email == e.email && e.password == password)) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (AuthData) {
      const employee = AuthData?.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'employee' ? <EmployeeDashboard data={LoggedInUserData} /> : ''}
    </>
  )
}

export default App