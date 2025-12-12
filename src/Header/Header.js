import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className=' sticky-top shadow-sm top-[10vh] w-full z-50 text-white bg-slate-700'>
            <div className='container-fluid mx-auto flex justify-between px-3 py-3 items-center'>
                <a href="#" className='navbar-brand'>
                    <img src={ require('../assets/react-brand.png') } loading='lazy' alt="react-brand" />
                </a>
                <div className=''>
                    <ul className=' flex gap-3'>
                        <li>
                            {/* <Link to={{pathname:'/home', hash:'#test'}} className={({isActive}) => isActive ? 'text-danger' : 'text-dark'}>
                                Home
                                </Link> */}
                            <NavLink to={ { pathname: '/home', hash: '#home' } }
                                className={ ({ isActive }) => isActive ? ' text-lime-600' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/discuss', hash: '#discuss' } }
                                className={ ({ isActive }) => isActive ? ' text-lime-600 font-semibold' : '' }>Discuss</NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/profile', hash: '#profile' } }
                                className={ ({ isActive }) => isActive ? ' text-lime-600 font-semibold' : '' }>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/props', hash: '#props' } }
                                className={ ({ isActive }) => isActive ? 'text-lime-600' : '' }>Props</NavLink>
                        </li>
                        {/* <Navbar/> */ }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header