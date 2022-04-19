import React from 'react'
import { NavLink } from 'react-router-dom'

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
  return (
    <nav>
        {/* Link component renders an anchor element */}
        {/* Add style prop to each component and set it to an arrow function */}
        <NavLink style={StyleActiveNavbar} to='/'>Home</NavLink>
        <NavLink style={StyleActiveNavbar} to='/about'>About</NavLink>
    </nav>
  )
}
