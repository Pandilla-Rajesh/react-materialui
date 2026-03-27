import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className=' sticky-top shadow-sm top-[10vh] w-full z-50 text-white bg-black' role='navigation'>
            <div className='container mx-auto flex justify-between px-3 py-2 items-center'>
                <Link className='navbar-brand'>
                    <img src={ require('../assets/react-brand.png') } loading='lazy' alt="react-brand" /></Link>
                <div className=''>
                    <ul className=' flex gap-3'>
                        <li>
                            {/* <Link to={{pathname:'/home', hash:'#test'}} className={({isActive}) => isActive ? 'text-danger' : 'text-dark'}>
                                Home
                                </Link> */}
                            <NavLink to={ { pathname: '/home', hash: '#home' } }
                                className={ ({ isActive }) => isActive ? ' text-cyan-500 font-bold' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/discuss', hash: '#discuss' } }
                                className={ ({ isActive }) => isActive ? ' text-cyan-500 font-bold' : '' }>Discuss</NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/profile', hash: '#profile' } }
                                className={ ({ isActive }) => isActive ? 'text-cyan-500 font-bold' : '' }>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/apicalls', hash: '#apicalls' } }
                                isActive={ ({ isActive }) => isActive ? ' text-cyan-500 font-bold' : '' }>API Calls
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/props', hash: '#props' } }
                                className={ ({ isActive }) => isActive ? 'text-cyan-500 font-bold' : '' }>Props</NavLink>
                        </li>
                        <li>
                            <NavLink to={ { pathname: '/jsonpage', hash: '#jsonserver' } }
                                className={ ({ isActive }) => isActive ? 'text-cyan-500 font-bold' : '' }>Json-Server</NavLink>
                        </li>

                        <li>
                            <NavLink to={ { pathname: '/customhook', hash: '#customhook' } }
                                className={ ({ isActive }) => isActive ? 'text-cyan-500 font-bold' : '' }>CustomHook</NavLink>
                        </li>

                        {/* <Navbar/> */ }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header