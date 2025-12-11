import React from 'react'

const Child = (props) => {

    const { userDetails } = props
    const { name, age, email, phone, role } = userDetails || {}

    return (
        <section>
            <article className='container'>
                {/* <h2>Welcome to the Child Component</h2> */ }
                { userDetails && (
                    <>
                        <div className=' card w-100'>
                            <div className=" card-body">
                                <h2>Name: { name }</h2>
                                <h3>Role: { role }</h3>
                                <div>
                                    <p>Age:{ age }</p>
                                    <h6>Email:{ email }</h6>
                                </div>
                                <h4>Phone: { phone }</h4>
                            </div>
                        </div>
                    </>
                ) }
            </article>
        </section>
    )
}
export default Child