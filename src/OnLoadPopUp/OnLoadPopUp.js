import axios from 'axios'
import react, { useCallback, useEffect, useState } from 'react'

const OnLoadPopUp = () => {

    const [showPopup, setShowPopup] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const handlePop = (e) => {
        e.stopPropagation()
        setShowPopup(false)
    }

    const getData = useCallback(async () => {
        setLoading(true)
        setShowPopup(true)
        try {

            const res = await axios.get('https://fakestoreapi.com/products')
            setData(res.data)
            console.log(res.data, 'popup data')

        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <>
            { showPopup && (
                <div className='popoverlay'>
                    <div className='popup'>
                        <button onClick={ handlePop }>X</button>
                        { loading ? (
                            <p>...Loading</p>
                        ) : (
                            <div>
                                { data.slice(0, 1)?.map((pro, index) => (
                                    <div key={ index + 1 }>
                                        <img src={ pro?.image } alt="" />
                                        <h2 className='text-center fw-bold'>Price: { pro?.price }</h2>
                                        <h3>{ data.title }</h3>
                                    </div>
                                )) }
                            </div>
                        ) }
                    </div>
                </div>
            ) }
        </>
    )
}
export default OnLoadPopUp