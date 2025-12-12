import React from 'react'

function SubChild(props) {

    const { product } = props
    const { id, title, description, availabilityStatus, brand,
        category, discountPercentage, minimumOrderQuantity, thumbnail, price, rating } = product || {}


    return (
        <div className='card mb-3 w-100 h-100 border border-slate-500 shadow-sm'>
            { product && (
                <>
                    <div>
                        <img src={ thumbnail } loading='lazy' alt="product-brand" className='img-fluid rounded' />
                    </div>
                    <div className="card-body w-100 p-0" key={ id }>
                        <h2 className='card-title bg-green-700 rounded p-3'>{ title }</h2>
                        <div className=' flex items-center justify-between border border-slate-600 
                        px-3 py-2 rounded bg-gray-100 mb-2 fw-bold'>
                            <h3 className='text-slate-800'>{ availabilityStatus }</h3>
                            <hr className='border border-cyan-800 opacity-100 h-8 fw-medium' />
                            <h4 className='text-slate-800'>{ brand }</h4>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h5 className='text-xl fw-semibold'>
                                <span className=' text-sm'>Price: </span> { price }
                            </h5>
                            <h6 className='text-xl'>
                                <span className='text-sm'>Rating : </span>
                                { rating }
                            </h6>
                        </div>
                        <div className='mb-2'>
                            <p className='h-100'>{ description }</p>
                        </div>
                        <div className=' bg-blue-500 p-2 rounded mb-2'>
                            <h3 className='text-xl text-white text-center fw-bold'>{ category }</h3>
                        </div>
                        <div className=' flex justify-between'>
                            <p> <span>Discount</span>{ discountPercentage }</p>
                            <p><span>Quantity</span>{ minimumOrderQuantity }</p>
                        </div>
                    </div>
                </>
            ) }
        </div>
    )
}

export default SubChild