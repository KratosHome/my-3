"use client"
import React, {useEffect, useState} from 'react';
import {fetchReviews} from "@/services/date";
import TrustedBy from "@/components/TrustedBy/TrustedBy";

export default  function WrapperRequest() {
    const [reviews, setReviews] = useState([]);

console.log("reviews", reviews)
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <TrustedBy reviews={reviews}/>
        </div>
    );
};
