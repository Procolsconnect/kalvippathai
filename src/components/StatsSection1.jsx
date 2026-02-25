import React, { useState, useEffect, useRef } from 'react';
import styles from './StatsSection.module.css';

const data = [
    {
        id: 1,
        end: "11",
        label: "UG Programs",
        isCountable: true
    },
    {
        id: 2,
        end: 7,
        suffix: "",
        label: "PG Programs",
        isCountable: true
    },
    {
        id: 3,
        end: 3,
        suffix: "",
        label: "Research Programmes",
        isCountable: true
    },
    {
        id: 4,
        end: 11,
        label: "Certificate Courses",
        isCountable: true
    },

];

const Counter = ({ end, duration = 1000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;

            if (progress < duration) {
                const nextCount = Math.min(Math.floor((progress / duration) * end), end);
                setCount(nextCount);
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={elementRef}>{count}{suffix}</span>;
};

const StatsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {data.map((item) => (
                    <div key={item.id} className={styles.statItem}>
                        <div className={styles.numberWrapper}>
                            {item.isCountable ? (
                                <Counter end={item.end} suffix={item.suffix || ""} />
                            ) : (
                                <span>{item.displayValue}</span>
                            )}
                        </div>
                        <p className={styles.label}>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
