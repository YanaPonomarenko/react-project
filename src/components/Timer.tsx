import { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setSeconds(prev => {
                if (prev === 60) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div>
            <button onClick={() => {
                setSeconds(0);
                setIsActive(true);
            }}>Start</button>

            <button onClick={() => {
                setIsActive(false);
                setSeconds(0);
            }}>Stop</button>

            {isActive && <h2>Таймер: {seconds} сек</h2>}
        </div>
    );
};

export default Timer;