import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

    // CSS into JS solution can also be used to style the active link
    // NavLink component will set a property called isActive (true or false) which can be destructured from the function parameter
    const StyleActiveNavbar = ({isActive}) => {
        return {
            // This return an object containing the styles
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    const auth = useAuth()

  return (
    <nav className='primary-nav'>
        {/* Link component renders an anchor element */}
        {/* Add style prop to each component and set it to an arrow function */}
        <NavLink style={StyleActiveNavbar} to='/'>Home</NavLink>
        <NavLink style={StyleActiveNavbar} to='/about'>About</NavLink>
        <NavLink style={StyleActiveNavbar} to='/products'>Products</NavLink>
        <NavLink style={StyleActiveNavbar} to='/profile'>Profile</NavLink>

        {/* If the user is not logged in, render a link, which is a link to the login route and text is also login */}
        {
          !auth.user && (
            <NavLink style={StyleActiveNavbar} to='/login'>Login</NavLink>
          )
        }
    </nav>
  )
}
