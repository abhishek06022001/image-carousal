import React, { useEffect, useState } from 'react';

function Carousel({ photos }) {
    const [index, setIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const left = () => {
        setIndex(prev => (prev - 1 + photos.length) % photos.length); // Move left and wrap around
    };

    const right = () => {
        setIndex(prev => (prev + 1) % photos.length); // Move right and wrap around
    };

    const start = () => {
        if (intervalId) return;  // Prevent creating multiple intervals
        const id = setInterval(() => {
            setIndex(prev => (prev + 1) % photos.length);
        }, 3500);
        setIntervalId(id);
    };

    const stop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    useEffect(() => {
        if (photos && photos.length > 0) {
            start();  // Start the auto-advance interval
        }
        return () => stop();  // Cleanup on unmount
    }, [photos]);

    return (
        <div>
            <button onClick={left}>Left</button>
            {photos && photos.length > 0 && (
                <div>
                    <img src={photos[index].url} alt={`Image ${index + 1}`} />
                </div>
            )}
            <button onClick={right}>Right</button>
        </div>
    );
}

export default Carousel;
