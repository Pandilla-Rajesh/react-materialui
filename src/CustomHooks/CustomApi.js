import React, { useState } from 'react'
import useFetch from './CustomHookApi'

function CustomApi() {

    const { product = [], loading, error } = useFetch('https://api.escuelajs.co/api/v1/products')
    const [search, setSearch] = useState('')
    // if(loading) return <p>...Loading</p>
    if(error) return <p>{ error.message }</p>

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filterSearch = product.filter((pro) =>
        pro.category?.name === "Clothes" || pro.category?.name === "Shoes"
        || pro.category?.name === "Furniture"
    )
        .filter((pro) =>
            pro.id.toString().includes(search) ||
            pro.title.toLowerCase().includes(search.toLowerCase())
        )



    return (
        <section className=' bg-gray-100 p-3'>
            <article className='container ms-auto'>
                <div className=' flex items-center justify-between lg:flex-row flex-col'>
                    <div className=' flex flex-col'>
                        <h2 className=' text-5xl font-bold mb-5'>
                            Classic Cotton T-Shirt – Regular Fit
                        </h2>
                        <p className=' text-2xl text-slate-900'>This matches your app's e-commerce prototype
                            intent with Platzi’s fake store endpoint.</p>
                    </div>
                    <span>
                        <img src={ require('../assets/pro_img.png') } alt="product-image"
                            loading='lazy' />
                    </span>
                </div>
                <form action="" className='flex flex-col md:flex-row items-center justify-between my-3 bg-slate-800 rounded-xl p-6'>
                    <h5 className=' text-xl text-slate-50'>Search the Product</h5>
                    <div className=' flex flex-col'>
                        <label htmlFor="name">Search</label>
                        <input type="text" id="name" className=' rounded-xl p-2 text-slate-50 focus:bottom-0 
                    focus:ring-0 focus:ring-transparent focus-visible:bg-transparent w-full'
                            value={ search } required
                            onChange={ handleSearch } placeholder='Search Item' />
                    </div>
                </form>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-fr'
                    role='product-data'>
                    { loading ? (
                        <p>...Loading</p>
                    ) : filterSearch?.length > 0 ? (
                        filterSearch?.slice(0, 100)?.map((pro) => (
                            <div
                                className="border-1 border-gray-300 rounded p-3 flex 
                                flex-col h-full"
                                key={ pro.id } >
                                <h6>{ pro.id }</h6>
                                {/* Image Section (Grow Area) */ }
                                <div className="flex grow items-center justify-center
                                 bg-white rounded border-1 border-slate-300 p-2 my-2">
                                    <img
                                        src={ pro.images?.[0] }
                                        alt={ pro.title }
                                        loading="lazy"
                                        className="max-h-32 object-contain"
                                    />
                                </div>
                                {/* Top */ }
                                <div className=' flex items-center justify-between 
                                mb-2 border-1 border-b-slate-300 pb-1'>
                                    <h2 className="text-slate-800 font-semibold
                                 text-sm flex items-center justify-center">
                                        { pro.title }
                                    </h2>
                                    <h1 className=' text-slate-800 text-sm font-semibold'>
                                        { pro.category?.name }</h1>
                                </div>

                                {/* Description */ }
                                <div className=' border-b border-b-slate-300 pb-2 mb-2'>
                                    <p className="text-sm line-clamp-4 text-black font-light">
                                        { pro.description }
                                    </p>
                                </div>
                                <div className=' text-sm text-gray-600 space-y-1'>
                                    <div className=' flex items-center justify-between bg-slate-800 p-2 rounded text-slate-50'>
                                        <p><strong>Id: </strong>{ pro.category?.id }</p>
                                        <p><strong>Slug: </strong>{ pro.category?.slug }</p>
                                    </div>
                                    <p><strong>Created Date: </strong>
                                        { new Date(pro.category?.creationAt).toLocaleDateString() }</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-xl text-slate-800 font-bold text-center'>No Data Found</p>
                    ) }
                </div>
            </article>
        </section>
    )

}

export default CustomApi