import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    // const [user, setUser] = useState([])
    // const [loading, setLoading] = useState(false)

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()
    const [error, setError] = useState({})

    // const handleChange = (event) => {
    //     const { name, value } = event.target
    //     setLogin({ ...login, [name]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     alert(JSON.stringify(login, null, 2))
    //     const errors = {}

    //     if(!login.username.trim()) {
    //         errors.username = 'please enter username'
    //     } else if(login.username.length > 10) {
    //         errors.username = 'please enter name should be 10 characters only'
    //     }

    //     if(Object.keys(errors).length === 0) {
    //         navigate('home')
    //     } else {
    //         setError(errors)
    //     }
    // }

    const getUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const res = await response.json()
            console.log(res)

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => res.json())
            .then(data => {
                console.log(data.products)
            }).catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <section className='info'>
            <div className='container'>
                <div className='info-brand'>
                    <h1>Welcome to the Profile Page Component</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                    <div className=' bg-green-300 p-4'>
                        fuvgfvuhf
                    </div>

                    <div className=' bg-gray-400 p-4'>
                        <img src={ require('../assets/login_new_img.png') } loading='lazy' alt="log-image" />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Profile