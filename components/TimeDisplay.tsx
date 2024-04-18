'use client'

import { useState, useEffect } from "react";

const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    const time = currentTime.toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});

    const date = (new Intl.DateTimeFormat('en-KE', { dateStyle: 'full'})).format(currentTime);

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {date}
            </p>
        </div>
    )
}

export default TimeDisplay