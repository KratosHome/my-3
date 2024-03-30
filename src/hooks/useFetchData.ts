import { useState } from 'react';

interface UseFetchDataProps<T> {
    initialState?: T;
}

interface UseFetchDataReturn<T> {
    data: T | any;
    error: string | null;
    isLoading: boolean;
    fetchData: (url: string, body: Object) => void;
}

export const useFetchData = <T>({ initialState }: UseFetchDataProps<T> = {}): UseFetchDataReturn<T> => {
    const [data, setData] = useState<T | undefined>(initialState);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = (url: string, body: Object) => {
        setIsLoading(true);
        setError(null);

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData: T) => {
                setData(jsonData);
            })
            .catch((error) => {
                setError('Fetch error: ' + error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { data, error, isLoading, fetchData };
};
