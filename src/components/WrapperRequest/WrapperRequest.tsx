"use client"
import React, {useEffect, useState} from 'react';
import TrustedBy from "@/components/TrustedBy/TrustedBy";

export default function WrapperRequest() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data.reverse());
        }

        fetchData();
    }, []);

    return (
        <TrustedBy reviews={reviews}/>
    );
};
