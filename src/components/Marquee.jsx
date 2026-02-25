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
                    <div className={styles.textContent}>Free Enquiry Call</div>
                    <a
                        className={styles.marquee}
                        href="tel:+919952317770"
                        onPointerOver={handlePointerOver}
                        onPointerOut={handlePointerOut}
                    >
                        +91 99523 17770
                    </a>
                </div>
                <div className={styles.marqueeRow}>
                    <div className={styles.textContent}>Scholarship Eligibility</div>
                    <a
                        className={styles.marquee}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdJ8N-zgjLuzZrj1q4CCmm3P3fXc4m6Ed2wHZAW50bL02WXlg/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noreferrer"
                        onPointerOver={handlePointerOver}
                        onPointerOut={handlePointerOut}
                    >
                        Click Here
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
