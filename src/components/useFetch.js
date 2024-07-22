import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const options = {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-n2D8sMqAmSFkHxkWeBpzLqFv'
            }
        };
        axios.get(url, options)
            .then(res => {
                setLoading(false)
                setData(res.data)
            }
            )
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [url])

    return ({ data, error, isLoading });
}

export default useFetch;