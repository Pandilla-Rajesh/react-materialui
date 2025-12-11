import React from 'react'

function SubChild(props) {

    const { product } = props
    const { id, title, description, availabilityStatus, brand,
        category, discountPercentage, minimumOrderQuantity, thumbnail, price, rating } = product || {}


    return (
        <div className='card mb-3 w-100'>
            { product && (
                <>
                    <span>
                        <img src={ thumbnail } loading='lazy' alt="product-brand" className='img-fluid' />
                    </span>
                    <div className="card-body">
                        <h2 className='card-title'>{ title }</h2>
                    </div>
                </>
            ) }
        </div>
    )
}

export default SubChild