import React, { useEffect, useState, Suspense } from 'react'
import Counter from '../Components/Reducer/Reducer'

const Home = () => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [time, setTime] = useState(0)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isrunning, setIsRunning] = useState(false)

    const [showComp, setShowComp] = useState(false)

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisible = () => {
        setIsVisible((prev) => !prev)
    }

    const handleShow = () => {
        setShowComp(true)
    }

    const getUser = async () => {

        setLoading(false)
        try {

            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            setUser(data.users)
            console.log(data.users, 'user data details')

        } catch(error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if(isrunning) {
            const interval = setInterval(() => {
                setTime((prev) => prev + 1)
                setCurrentDate(new Date())
            }, 100)
            return () => clearInterval(interval)
        } else {
            setTime(0)
        }
    }, [isrunning])

    const LazyComponet = React.lazy(() => Promise.resolve({
        default: () =>
            <React.Fragment>
                <h2>Welcome to the Lazy Load Componet home page </h2>
            </React.Fragment>
    }))

    return (
        <section className='info' role='home'>

            <article className="container">

                {/* user-details */ }

                <div className=' grid grid-cols-1'>
                    <div className=' bg-violet-600 p-3 rounded-5'>
                        <h2 className='text-center text-2xl text-white font-bold uppercase'>Welcome to User Details</h2>
                    </div>
                </div>

                <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-4 gap-3 my-4'>
                    { loading ? (
                        <p>...Loading</p>
                    ) : (
                        user?.length > 0 ? (
                            user?.slice(0, 20)?.map((users, index) => (
                                <div className=' bg-white border border-slate-400 rounded p-3' key={ index }>
                                    <h6>{ users.id }</h6>
                                    <div className=' flex items-center justify-between border-b p-2'>
                                        <h2 className=' font-semibold text-xl'>FirstName: { users.firstName }</h2>
                                        <h3 className=' font-semibold text-xl'>LastName:
                                            <span className=' text-sky-700'>{ users.lastName }</span>
                                        </h3>
                                    </div>
                                    <img src={ users.image } alt={ users.image } className='img-fluid'
                                        loading='lazy' />
                                    <div className=' flex items-center justify-between'>
                                        <p className=' text-sm font-bold text-slate-800'>Age: { users.age }</p>
                                        <p className=' text-sm font-bold text-slate-800'>Gender: { users.gender }</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Data Found</p>
                        )
                    ) }
                </div>

                {/* end */ }

                <button onClick={ handleShow }>Lazy Comp</button>
                { showComp && (
                    <Suspense>
                        <LazyComponet />
                    </Suspense>
                ) }

                <div className='flex flex-row gap-3'>
                    <div className='card border '>
                        <img src={ require('../assets/login_new_img.png') } alt="" />
                        <div className='card-body'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, explicabo. Minus et voluptatem amet dolorem minima iusto asperiores recusandae beatae, quibusdam repudiandae
                                cum natus illo assumenda! Porro, corporis? Exercitationem, repudiandae!</p>
                        </div>
                    </div>

                    <div className='card border '>
                        <div className='card-body '>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                                explicabo. Minus et voluptatem.
                            </p>
                        </div>
                    </div>
                </div>

            </article>

            <article>
                <div className='container ms-auto'>
                    <Counter />
                    <h1>Welcome to the Home Component</h1>
                    <article >
                        <button id='test'>test</button>
                    </article>
                    <article>
                        <div>
                            <p>

                                Line 9:21: The href attribute requires a valid value to be accessible.
                                Provide a valid, navigable address   as the href value. If you cannot provide a valid href, but still need the element to resemble
                            </p>
                        </div>
                    </article>

                    <article>
                        <div className='card'>
                            <div className='card-body'>
                                <h1 className='card-title text-black'>Timer Display</h1>
                                <div className=' d-flex flex-column align-content-center justify-content-center'>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <h3 className='fs-1 text-block'>
                                            { isrunning ? `Start ${time}` : `Stop ${time}` }
                                        </h3>
                                        <h1 className='text-black fs-5 mb-3'>{ currentDate.toLocaleString() }</h1>
                                    </div>
                                    {/* <h3 className='fs-1 text-white'>Time: { time }</h3> */ }
                                    {/* <p className='fs-6 text-white mb-2'>{ currentDate.toLocaleString() }</p> */ }
                                    {/* <h4>Current Date: { currentDate.toLocaleString() }</h4> */ }
                                    <div className='d-flex align-items-center gap-3 justify-content-center'>
                                        <button className='btn btn-primary' onClick={ () => setIsRunning(true) }>
                                            Start
                                        </button>
                                        <button className='btn btn-secondary' onClick={ () => setIsRunning(false) }>
                                            Stop
                                        </button>
                                    </div>
                                </div>
                                <p className='card-text'>This is a longer card with supporting text below as
                                    a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button onClick={ toggleVisible }>
                                    { isVisible ? 'hide' : 'show' ? 'name' : 'Rajesh Pandilla' }</button>
                            </div>
                        </div>
                    </article>

                </div>
            </article>
        </section>
    )
}
export default Home