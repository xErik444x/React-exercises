import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json()
            })
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => { setLoading(false) });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { loading, data, error };
}