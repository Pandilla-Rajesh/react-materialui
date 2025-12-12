import React, { useEffect, useState, Suspense } from 'react'
import Counter from '../Components/Reducer/Reducer'

const Home = () => {

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
        <section className='info'>

            <article className="container">
                <button onClick={ handleShow }>Lazy Comp</button>
                { showComp && (
                    <Suspense>
                        <LazyComponet />

                    </Suspense>
                ) }
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
                                <h1 className='card-title'>Timer Display</h1>
                                <div className=' d-flex flex-column align-content-center justify-content-center'>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <h3 className='fs-1 text-white'>
                                            { isrunning ? `Start ${time}` : `Stop ${time}` }
                                        </h3>
                                        <h1 className='text-white fs-5 mb-3'>{ currentDate.toLocaleString() }</h1>
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