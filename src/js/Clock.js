import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getRotationStyle = (value, type) => {
        const degree = type === 'hour'
            ? (value % 12) * 30 + (time.getMinutes() / 2)
            : type === 'minute'
                ? value * 6
                : value * 6;

        return {
            transform: `rotate(${degree}deg)`
        };
    };

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div className="clock-container">
            <div className="clock">
                <div className="needle hour-needle" style={getRotationStyle(hours, 'hour')}></div>
                <div className="needle minute-needle" style={getRotationStyle(minutes, 'minute')}></div>
                <div className="needle second-needle" style={getRotationStyle(seconds, 'second')}></div>
                <div className="center"></div>
                <div className="numbers">
                    {[...Array(12).keys()].map(num => (
                        <div key={num} className={`number number-${num + 1}`}>
                            {num + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clock;