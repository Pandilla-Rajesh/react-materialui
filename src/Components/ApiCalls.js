import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalls = () => {

    const [posts, setPosts] = useState([])
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    // useing async-await //

    const fetchProduct = async () => {

        setLoading(true)
        try {
            const proRes = await axios.get('https://dummyjson.com/products')
            setProduct(proRes.data.products)
            console.log(proRes.data.products, 'product display the data')
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    // end //

    // direct useeffect//
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data, 'display the post data')
            })

    }, [])

    // end //

    return (

        <section className='bg-gray-100'>

            <article className=' container-xl ms-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div className='col-span-1'>
                        <div className='bg-gray-100 p-3 rounded'>
                            fdvjfg
                        </div>
                    </div>
                    <div className='col-span-1'>lmkg</div>
                    <div className='col-span-1'>lmkg</div>
                    <div className='col-span-1'>lmkg</div>
                </div>
            </article>

            <article className=' container-fluid'>
                <div className='grid grid-cols-1 my-4'>
                    <div className='bg-gray-100 p-0 rounded'>
                        <h2 className=' text-5xl text-uppercase font-bold text-center mb-3'>
                            Welcome to API Calls</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            { loading ? (
                                <p>...Loading</p>
                            ) : (
                                product?.length > 0 ? (
                                    product?.slice(0, 20)?.map((pro, index) => (
                                        <div className='bg-gray-50 rounded-lg border border-default 
                                        shadow-sm py-2 px-2'
                                            key={ index }>
                                            <a href="#">
                                                <img src={ pro.thumbnail || ('../assets/pexels.jpg') } loading='lazy'
                                                    className='border rounded-t img-fluid w-100' alt={ pro.thumbnail } />
                                            </a>
                                            <h2 className='text-2xl'>ID: { pro.id }</h2>
                                        </div>
                                    ))
                                ) : (
                                    <div className='bg-gray-100 w-100'>
                                        <p className='text-center text-red-600 text-3xl'>No Data Found</p>
                                    </div>
                                )
                            ) }
                        </div>
                        {/* 
                        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3'>
                            { loading ? (
                                <p>...Loading</p>
                            ) : (
                                posts?.length > 0 ? (
                                    posts?.splice(-4)?.map((post, id) => (
                                        <div className=' bg-neural-primary-soft block max-w-sm border border-default 
                                    rounded-lg shadow-sm p-3' key={ id }>
                                            <a href="#">
                                                <img src={ post.thumbnail || "../assets/pexels.jpg" } loading='lazy'
                                                    alt={ post.thumbnail } />
                                            </a>
                                            <h2 className='text-2xl'>ID: { post.id }</h2>
                                        </div>
                                    ))
                                ) : (
                                    <p>No Data Found</p>
                                )
                            ) }
                        </div> */}
                    </div>
                </div>
            </article>

        </section>
    )
}
export default ApiCalls