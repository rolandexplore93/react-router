import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Profile = () => {
// 4. Display the login username in the profile component and also add a logout button
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  
    return (
    <div>
        <h4>Welcome {auth.user} </h4>
        <button onClick={handleLogout}>logout</button>
    </div>

  )
}

export default Profile

