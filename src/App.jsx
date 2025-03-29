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
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    if (AuthData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [AuthData])

  const handleLogin = (email, password) => {
    if (AuthData && AuthData?.admin.find((e) => email == e.email && e.password == password)) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (AuthData && AuthData?.employees.find((e) => email == e.email && e.password == password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
    }
    else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'employee' ? <EmployeeDashboard /> : ''}
    </>
  )
}

export default App