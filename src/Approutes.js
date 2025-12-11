import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const MainLayout = React.lazy(() => import('./MainLayout/MainLayout'))
const Home = lazy(() => import('./pages/Home'))
const Discuss = lazy(() => import('./pages/Discuss'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Props = React.lazy(() => import('./Components/Props/Props'))

function Approutes() {

    const router = createBrowserRouter([
        {
            path: '/', element: (<Suspense fallback={ <div>...Loading</div> }><MainLayout /></Suspense>),

            children: [
                { index: true, element: (<Suspense fallback={ <div>...Loading</div> }><Home /></Suspense>) },
                { path: 'home', element: (<Suspense fallback={ <div>...Loading</div> }><Home /></Suspense>) },
                { path: 'discuss', element: (<Suspense fallback={ <div>...Loading</div> }><Discuss /></Suspense>) },
                { path: 'profile', element: (<Suspense fallback={ <div>...Loading</div> }><Profile /></Suspense>) },
                { path: 'props', element: (<Suspense fallback={ <div>...Loading</div> }><Props /></Suspense>) }
            ]

        }
    ])
    return (
        <Suspense fallback={ <div>...Loading</div> }>
            <RouterProvider router={ router }></RouterProvider>
        </Suspense>
    )
}

export default Approutes