import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

// 5. Protect the profile route
export const RequireAuth = ({children}) => {
    const auth = useAuth()
    const location = useLocation()
    // If user is not logged in, redirect user to the login route
    if (!auth.user){
        return <Navigate to="/login" state={{path: location.pathname}} />
    }

    return children

    // In App.js, wrap the Profile comp. with RequireAuth component

}
