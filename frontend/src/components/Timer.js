import React, { useEffect, useState } from 'react';
import clock from '../asset/stopwatch.png';

const Timer = () => {

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const startHandler = () => {
        setStart(!start);
    }

    useEffect(() => {
        let interval;

        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [start, time]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex justify-center items-center'>
            <img
                className='w-[30px] h-[30px] cursor-pointer'
                src={!start ? 'https://img.icons8.com/ios/100/000000/start--v1.png' : 'https://img.icons8.com/ios/50/000000/circled-pause.png'}
                alt='start-pause'
                onClick={startHandler}
            />
            <div>{formatTime(time)}</div>
            <img
                className='w-[30px] h-[30px]'
                src={clock}
                alt='clock'
            />
        </div>
    )
}

export default Timer;