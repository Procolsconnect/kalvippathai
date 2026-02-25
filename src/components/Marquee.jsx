import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
    const handlePointerOver = (e) => {
        const target = e.currentTarget;
        target.classList.add(styles.animate);
    };

    const handlePointerOut = (e) => {
        const target = e.currentTarget;
        target.classList.remove(styles.animate);
    };

    const handleClick = (text) => {
        console.log('Clicked:', text);
    };

    return (
        <div className={styles.marqueeSection}>
            <div className={styles.rowContainer}>
                <div className={styles.marqueeRow}>
                    <div className={styles.textContent}>Fees Enquiry</div>
                    <button
                        className={styles.marquee}
                        onPointerOver={handlePointerOver}
                        onPointerOut={handlePointerOut}
                        onClick={(e) => handleClick(e.target.textContent)}
                    >
                        Limited Seats
                    </button>
                </div>
                <div className={styles.marqueeRow}>
                    <div className={styles.textContent}>Scholarship Eligibility</div>
                    <button
                        className={styles.marquee}
                        onPointerOver={handlePointerOver}
                        onPointerOut={handlePointerOut}
                        onClick={(e) => handleClick(e.target.textContent)}
                    >
                        Click Here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
