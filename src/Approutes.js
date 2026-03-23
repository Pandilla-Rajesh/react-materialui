import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ApiCalls from './Components/ApiCalls'

const Login = React.lazy(() => import('./pages/Login'))
const MainLayout = React.lazy(() => import('./MainLayout/MainLayout'))
const Home = lazy(() => import('./pages/Home'))
const Discuss = lazy(() => import('./pages/Discuss'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Props = React.lazy(() => import('./Components/Props/Props'))
const JsonPage = React.lazy(() => import('./Components/JSON/JsonPage'))
const CustomApi = React.lazy(() => import('./CustomHooks/CustomApi'))
const NoDataFound = lazy(() => import('./NoDataFound'))

function Approutes() {

    const router = createBrowserRouter([

        { index: true, element: (<Suspense fallback={ <div>...Loading</div> }><Login /></Suspense>) },
        { path: 'login', element: (<Suspense fallback={ <div>...Loading</div> }><Login /></Suspense>) },
        {
            path: '/', element: (<Suspense fallback={ <div>...Loading</div> }><MainLayout /></Suspense>),
            children: [
                { index: true, element: (<Suspense fallback={ <div>...Loading</div> }><Home /></Suspense>) },
                { path: 'home', element: (<Suspense fallback={ <div>...Loading</div> }><Home /></Suspense>) },
                { path: 'discuss', element: (<Suspense fallback={ <div>...Loading</div> }><Discuss /></Suspense>) },
                { path: 'profile', element: (<Suspense fallback={ <div>...Loading</div> }><Profile /></Suspense>) },
                { path: 'props', element: (<Suspense fallback={ <div>...Loading</div> }><Props /></Suspense>) },
                { path: 'apicalls', element: (<Suspense fallback={ <div>...Loading</div> }><ApiCalls /></Suspense>) },
                { path: 'jsonpage', element: (<Suspense fallback={ <div>...Loading</div> }><JsonPage /></Suspense>) },
                { path: 'customhook', element: (<Suspense fallback={ <div>...Loading</div> }><CustomApi /></Suspense>) }
            ]

        },
        { path: '*', element: (<Suspense fallback={ <div>...Loading</div> }><NoDataFound /></Suspense>) }

    ])
    return (
        <Suspense fallback={ <div>...Loading</div> }>
            <RouterProvider router={ router }></RouterProvider>
        </Suspense>
    )
}

export default Approutes