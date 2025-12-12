import React, { useEffect, useState } from 'react'
import Child from './Child'
import SubChild from './SubChild'

const Parent = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const getProduct = async () => {

        setLoading(true)
        try {

            const res = await fetch('https://dummyjson.com/products')
            const response = await res.json()
            setProduct(response.products)
            console.log(response.products, 'products display')
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    const userDetails = [

        { name: 'Rajesh', age: 40, email: 'rajesharjun786@gmail.com', phone: 9966843353, role: 'SSE UI Developer' },
        { name: 'Ushasri', age: 34, email: 'ushasrichitti@gmail.com', phone: 9701587645, role: 'Home Maker' },
        { name: 'Aadhya', age: 9, email: 'aadhya@gmail.com', phone: 9966843353, role: 'Child One' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },
        { name: 'Arjun', age: 3, email: 'arjun@gmail.com', phoine: 7867867864, role: 'Child Two' },

    ]

    // const mainCard = {

    //     display: 'flex',
    //     flexDirection: 'row',
    // }

    return (

        <section>
            <article className='container'>
                <h2 className='display-1'>Welcome to the Parent Component</h2>
            </article>

            <article>
                <div className='row'>
                    {/* <div className='col-lg-3'>
                        <Child userDetails={ userDetails[0] } />
                    </div> */}
                    <div className='col-12'>
                        <h2 className='fs-1 text-center mb-2'>Welcome to the Child Component</h2>
                    </div>
                    { loading ? (
                        <p>...Loading</p>
                    ) : (
                        userDetails?.length > 0 ? (
                            userDetails.slice(0, 20)?.map((user, index) => (
                                <div key={ index } className='col-lg-3'>
                                    <Child userDetails={ user } />
                                </div>
                            ))
                        ) : (
                            <p>No Data Found</p>
                        )
                    ) }
                </div>
            </article>

            <article className='conatiner ms-auto'>
                <div className="row align-content-center justify-content-center">
                    <div className="col-12">
                        <h1 className='fs-3 text-center'>
                            Welcome to the Subchild Component Product Details
                        </h1>
                    </div>

                    { loading ? (
                        <p>...Loading</p>
                    ) : (
                        product?.length > 0 ? (
                            product.slice(0, 20)?.map((pro, index) => (
                                <div className='col-lg-3 mb-3' key={ index }>
                                    <SubChild product={ pro } />
                                </div>
                            ))
                        ) : (
                            <p>No Data Found</p>
                        )
                    ) }

                </div>
            </article>

            <article className='container'>
                <div className='row'>
                    { loading ? (
                        <p>...Loading</p>
                    ) : (
                        userDetails?.length > 0 ? (
                            userDetails?.slice(0, 20)?.map((user, id) => (
                                <div className='col-12 col-lg-4 col-md-12 col-sm-2'>
                                    <div className='card w-100'>
                                        <div className='card-body p-0 w-100'>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h2 className='card-title mb-0'>{ user.name }</h2>
                                                <h3 className='fs-3'>{ user.age }</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Data Found</p>
                        )
                    ) }
                </div>
            </article>

            <article className="container">
                <div className="row">
                    <div className="col-md-4">

                        { loading ? (
                            <p>...Loading</p>
                        ) : userDetails?.length > 0 ? (
                            userDetails.slice(0, 10).map((user, index) => (
                                <div className="card mb-3" key={ index }>
                                    <div className="card-body">
                                        <h1 className="fs-2">{ user.name }</h1>
                                        <h2 className='fs-2'>{ user.age }</h2>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Data Found</p>
                        ) }

                    </div>
                </div>
            </article>

            <article className='container mx-auto'>
                { loading ? (
                    <>
                        <p>Loading</p>
                    </>
                ) : (
                    <div className='table-responsive relative overflow-x-auto'>
                        <table className=' table-fixed text-sm rounded overflow-hidden text-left
                      rtl:text-right text-gray-700 dark:text-gray-400 w-full'>
                            <thead className='bg-green-950 text-gray-50 font-medium'>
                                <tr key="">
                                    <th scope='col' className='px-3 py-2'>id</th>
                                    <th scope='col' className='px-3 py-2'>brand</th>
                                    <th scope='col' className='px-3 py-2'>category</th>
                                    <th scope='col' className='px-3 py-2'>title</th>
                                    <th scope='col' className='px-3 py-2'>description</th>
                                    <th scope='col' className='px-3 py-2'>discountPercentage</th>
                                    <th scope='col' className='px-3 py-2'>images</th>
                                    <th scope='col' className='px-3 py-2'>minimumOrderQuantity</th>
                                    <th scope='col' className='px-3 py-2'>thumbnail</th>
                                    <th scope='col' className='px-3 py-2'>returnPolicy</th>
                                    <th scope='col' className='px-3 py-2'>shippingInformation</th>
                                </tr>
                            </thead>
                            <tbody>
                                { product?.length > 0 ? (
                                    product.slice(0, 10)?.map((pro, index) => (
                                        <>
                                            <tr key={ index } className='border dark:border-gray-500'>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.id }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.brand }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.category }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.title }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.description }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.discountPercentage }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>
                                                    <div>
                                                        <img src={ pro.images } loading='lazy' alt="" />
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.minimumOrderQuantity }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>
                                                    <div>
                                                        <img src={ pro.thumbnail } loading='lazy' alt="" />
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.returnPolicy }</td>
                                                <td className='px-3 py-2 text-sm text-slate-50'>{ pro.shippingInformation }</td>
                                            </tr>
                                        </>
                                    ))
                                ) : (
                                    <>
                                        <tr key="">
                                            <td colSpan="5">No Data Found</td>
                                        </tr>
                                    </>
                                ) }
                            </tbody>
                        </table>
                    </div>
                ) }
            </article>

        </section>
    )
}
export default Parent