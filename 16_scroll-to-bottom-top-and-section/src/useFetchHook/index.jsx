import { useState , useEffect } from "react";



export default function useFetch(url, options = {}) {
    //3 states

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData(getUrl) {
        try {
            setIsLoading(true);
            const response = await fetch(getUrl, { ...options })
            if (!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            setData(result);
            setError(null)
            setIsLoading(false);
        } catch (error) {
            setError(error, "Some error occurred");
            setIsLoading(false);
        }

    }


    useEffect(() => {

        fetchData(url)

    }, [url])

    return { data, error, isLoading }
}