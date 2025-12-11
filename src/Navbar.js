import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav>
            <NavLink to={{pathname:'home'}} className={({ isActive }) => isActive ? 'text-danger' : ''}>Home</NavLink>
            <NavLink to={{pathname:'profile', hash:'#test'}} className={({ isActive }) => isActive ? 'text-danger' : ''}>
            Profile
            </NavLink>
            <NavLink to={{pathname:'discuss'}} className={({isActive}) => isActive ? 'text-danger' : ''}>Discuss</NavLink>
        </nav>
    )
}

export default Navbar