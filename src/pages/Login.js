import React, { useCallback, useState } from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState({ username: '', password: '' })
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const toggleVisible = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = useCallback((event) => {

        const { name, value } = event.target
        setLogin({ ...login, [name]: value })
        setLogin((prev) => ({
            ...prev, [name]: value
        }))
    }, [login])

    const handleSubmit = useCallback(async (e) => {

        e.preventDefault()
        alert(JSON.stringify(login, null, 1))
        const errors = {}

        if(!login.username.trim()) {
            errors.username = 'please enter username'
        } else if(!login.username.length < 3) {
            errors.username = "please enter username 3 characters"
        }

        if(!login.password.trim()) {
            errors.password = 'please enter password'
        } else if(!login.password < 6) {
            errors.password = 'please enter password 6 characters'
        }

        if(Object.keys(errors).length === 0) {
            setTimeout(() => {
                setError(errors)
                setLoading(false)
            }, 1000)
            return;
        }

        try {

            const resposnse = await fetch('https://dummyjson.com/auth/login', {
                method: "POST",
                catche: 'no-store',
                // "username": "michaelw",
                // "password": "michaelwpass",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            })

            if(!resposnse.ok) {
                throw new Error("Login failed");

            }

            const data = await resposnse.json()
            console.log(data, 'login details')
            navigate('/home')

        } catch(error) {
            setLoading(false)
            if(error.response && error.response.data.message) {
                setError({ api: error.response.data.message })
            } else {
                setError({ api: 'somethin is worng try again' })
            }
        } finally {
            setLoading(false)
            setLogin({ username: '', password: '' })
        }

    }, [login, navigate])

    return (
        <section className=' bg-gradient-to-tr from-teal-100 via-teal-500 via-lime-500 from-lime-50 h-full'>
            <article className=' container ms-auto'>
                <div className=' grid grid-cols-1 h-dvh'>
                    <div className=' flex items-center justify-center'>
                        <div className='p-4 border-1 border-teal-600 rounded shadow-sm sm:w-full md:w-1/2 lg:w-1/3'>
                            <div className=' flex items-center justify-center flex-col gap-2'>
                                <div>
                                    <PeopleAltIcon fontSize='large' />
                                </div>
                                <h2 className=' text-white text-2xl font-bold uppercase mb-0'>Member Login</h2>
                                <p>Hello Welcome back</p>
                                { loading ? (
                                    <p>...Loading</p>
                                ) : (
                                    <form className='min-w-full mx-auto' onSubmit={ handleSubmit }>
                                        <div className='mb-3'>
                                            <input type="text" name="username"
                                                className={ `w-full p-3 ps-9 bg-teal-500 text-sm text-white
                                         focus:ring-teal-100 border-1 border-teal-600 rounded-lg
                                          placeholder:text-teal-200 ${error.username ? 'border-red-500 ring-red-500' : 'border-gray-500'}` }
                                                value={ login.username }
                                                onChange={ handleLogin } autoComplete='off'
                                                placeholder='Enter UserName' />
                                            <p>{ error.username &&
                                                <small className=' text-sm text-red-600'>{ error.username }</small>
                                            }</p>
                                        </div>
                                        <div className='mb-3'>
                                            <input type="password" name="password"
                                                className={ `w-full p-3 ps-9 bg-teal-500 text-sm text-white
                                         focus:ring-teal-100 border-1 border-teal-600 rounded-lg
                                          placeholder:text-teal-200 ${error.password ? 'border-red-500 ring-red-500' : 'border-gray-300'}` }
                                                value={ login.password } onChange={ handleLogin } autoComplete='off'
                                                placeholder='Enter Password' />
                                            <p>{ error.password && (
                                                <small className='text-sm text-red-500'>{ error.password }</small>
                                            ) }</p>
                                        </div>

                                        <div className=' flex justify-center items-center flex-col'>
                                            <button type='submit' value="submit"
                                                className='bg-teal-700 text-white font-sm text-sm p-3 px-5 rounded-full'>
                                                Submit
                                            </button>
                                            <button className='text-sm text-teal-200'>Forgot password</button>
                                        </div>

                                    </form>
                                ) }

                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Login