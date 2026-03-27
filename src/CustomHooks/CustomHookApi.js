import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

function useFetch(url) {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProduct = useCallback(async () => {

        setLoading(true)
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

    const addProduct = async (newproduct) => {

        setLoading(true)
        try {

            const res = await axios.post(url, newproduct)
            setProduct((prev) => [...prev, res.data])
            return res.data

        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    return { product, loading, error, addProduct, refetch: fetchProduct }
}

export default useFetch