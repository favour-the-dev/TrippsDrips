import { useState, useEffect } from "react";

interface CounterProps{
    targetNumber: number,
    duration: number
}

function Counter({ targetNumber, duration = 2000 }:CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= targetNumber) return; // Stop when target is reached

        const increment = Math.ceil(targetNumber / (duration / 50)); // Adjust step size
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev + increment >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber; // Ensure it stops exactly at target
                }
                return prev + increment;
            });
        }, 50); // Updates every 50ms

        return () => clearInterval(interval); // Cleanup on unmount
    }, [count, targetNumber, duration]);

    return <h1 className="text-4xl font-bold">{count}</h1>;
}

export default Counter