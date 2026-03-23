import React from 'react'
import useFetch from './CustomHookApi'

function CustomApi() {

    const { product, loading, error } = useFetch('https://fakestoreapi.com/products')

    // if(loading) return <p>...Loading</p>
    if(error) return <p>{ error.message }</p>

    return (
        <section className=' bg-violet-950 p-3'>
            <article className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-fr'>
                    { loading ? (
                        <p>...Loading</p>
                    ) : product?.length > 0 ? (
                        product?.slice(0, 20)?.map((pro) => (
                            <div className='border-1 border-orange-400 rounded p-2 
                            flex flex-col h-full' key={ pro.id }>
                                <div>
                                    <p className='bg-orange-500 p-2 w-7 h-7 rounded text-black'>Id: { pro.id }</p>
                                </div>
                                <div className=' flex flex-grow items-center flex-column 
                                 bg-white rounded'>

                                    <img src={ pro.image } alt={ pro.title }
                                        loading='lazy' className='object-contain max-w-32' />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Data Found</p>
                    ) }
                </div>
            </article>
        </section>
    )

}

export default CustomApi