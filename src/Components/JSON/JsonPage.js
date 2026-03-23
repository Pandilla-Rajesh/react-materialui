import React, { useCallback, useEffect, useState } from 'react'
// import data from "../../../data.json";

const JsonPage = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const getUser = async () => {

        setLoading(false)
        try {
            const res = await fetch('http://localhost:7070/users')
            const response = await res.json()
            setUsers(response)
            console.log(response, 'users data displayed')
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetch('http://localhost:7070/users').then((res) => res.json())
            .then((user) => {
                console.log(user, 'data user list')
            })
    }, [])

    useEffect(() => {
        getUser()
    }, [])

    return (

        <section className='info'>
            <article className=' container ms-auto'>
                <div className=' flex items-center justify-center p-3 bg-orange-100 rounded uppercase mb-3'>
                    <h1 className=' text-2xl font-bold text-center leading-6'>Welcome to the mock data form
                        <p className='text-3xl'>Json Server Page</p>
                    </h1>
                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    { loading ? (
                        <p className=' text-red-600'>{ error }</p>
                    ) : (
                        users?.map((user) => (
                            <div key={ user.id } className='p-2 border rounded bg-teal-100 mb-2'>
                                <div className=' flex items-center justify-between'>
                                    <p className=' text-slate-600'>{ user.id }</p>
                                    <h2>{ user.name }</h2>
                                </div>
                            </div>
                        ))
                    ) }
                </div>
            </article>
        </section>
    )

}
export default JsonPage