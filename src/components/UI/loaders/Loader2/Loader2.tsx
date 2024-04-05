import React from 'react';
import "./Loader2.scss";

const Loader2 = () => {
    return (
        <div className="wrap">
            <div className="loader"></div>
            <div className="loaderbefore"></div>
            <div className="circular"></div>
            <div className="circular another"></div>
            <div className="text">Loading</div>
        </div>

    );
};

export default Loader2;