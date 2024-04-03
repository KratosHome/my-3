import React from 'react';

const BlockPageTransition = () => {
    return (
        <div className="page-transition" style={{
            position: 'fixed',
            top: 0,
            left: '-100%',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            zIndex: 9999,
        }}/>
    );
};

export default BlockPageTransition;