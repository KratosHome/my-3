"use client"
import React, { useEffect, useState } from 'react';
import { fetchReviews } from "@/api/date";
import TrustedBy from "@/components/TrustedBy/TrustedBy";

export default function WrapperRequest() {
    const [reviews, setReviews] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchData();
    }, []);

    if (!reviews) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TrustedBy reviews={reviews}/>
        </div>
    );
};
