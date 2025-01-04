'use client';

import { useState, useEffect } from 'react';

export default function LocalTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    function updateCSTTime() {
      const now = new Date();
      const options = {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false, // Change to false for 24-hour format
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setCurrentTime(formatter.format(now));
    }

    // Update the time immediately and set an interval to update every second
    updateCSTTime();
    const interval = setInterval(updateCSTTime, 60000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {currentTime || 'Loading...'}
    </span>
  );
}
