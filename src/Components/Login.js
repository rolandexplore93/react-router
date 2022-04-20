import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
// 3a. Create a login route that will accept username
export const Login = () => {
    const [user, setUser] = useState()
    // Call the login function from AuthContext
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    // 5Next. Check if the path is set on the state object and use the same as redirect path
    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        // call auth.login(user) and pass in username as an argument
        auth.login(user)
        navigate(redirectPath, {replace: true}) 
    }

    return (
    <div>
        <label>
            Username: {''}
            <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
