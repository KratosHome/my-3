import React from 'react';
import {fetchReviews} from "@/api/date";
import TrustedBy from "@/components/TrustedBy/TrustedBy";

export default async function WrapperRequest() {
    const reviews = await fetchReviews()

    return (
        <div>
            <TrustedBy reviews={reviews}/>
        </div>
    );
};
