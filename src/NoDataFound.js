import React from 'react'

const NoDataFound = () => {

    return (
        <section className=' bg-slate-50 p-4 h-screen'>
            <article className=' container ms-auto'>
                <div className=' flex items-center justify-center h-dvh'>
                    <div className='grid grid-cols-1'>
                        <div className='bg-white rounded p-5 no-page w-100'>
                            <div className=' flex items-center justify-center flex-column w-100'>
                                <img src={ require('./assets/error-desktop-v1.webp') } loading='lazy'
                                    alt="no-data-found-image" />
                                <h2 className=' text-2xl font-bold text-center'>
                                    We can’t find the page you’re looking for
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default NoDataFound