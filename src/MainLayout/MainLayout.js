import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar'

function MainLayout() {
    return (

        <>
            <header className='sticky-top'>
                <Header />
                {/* <Navbar/> */ }
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout