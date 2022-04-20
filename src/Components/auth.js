import React, { createContext, useContext, useState } from 'react'
// 2a) Create a user state variable and provide it to the entire component tree using React Context API
const AuthContext = createContext(null)
console.log(AuthContext)

export const AuthProvider = ({children}) => {
    // 2b) Maintain the user state and define the function to login and logout
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }


  return (
    <div>
        {/* 2c) Provide the login and logout values using the AuthContext provider */}
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
        
    </div>
  )
}

// 2d) Define a value that  return the value of AuthContext using useContext() Hooks
export const useAuth = () => {
    return useContext(AuthContext)
}