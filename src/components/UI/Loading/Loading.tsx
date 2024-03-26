import React from 'react';
import styles from './LoadingBar.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingBarContainer}>
            <div className={styles.loadingBar}></div>
        </div>
    );
};

export default Loading;