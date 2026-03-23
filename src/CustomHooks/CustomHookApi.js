import React, { useCallback, useEffect, useState } from 'react'

function useFetch(url) {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProduct = useCallback(async () => {

        setLoading(false)
        try {
            const res = await fetch(url)
            if(!res.ok) {
                throw new Error("failed the feth data");

            }
            const response = await res.json()
            setProduct(response)
            console.log(response, 'fake api data displayed')
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }

    }, [url])

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    return { product, loading, error, refetch: fetchProduct }
}

export default useFetch