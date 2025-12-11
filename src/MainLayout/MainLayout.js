import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function MainLayout() {
    return (

        <>
            <header className='sticky-top'>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout