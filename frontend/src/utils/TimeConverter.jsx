import React, { useEffect, useState } from 'react';

const TimeConverter = ({ timestamp }) => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        // Convert timestamp to Date object
        const convertedTime = new Date(timestamp * 1000); // Convert seconds to milliseconds

        // Get current time
        const currentTime = new Date();

        // Calculate time difference in seconds
        const timeDifferenceInSeconds = Math.floor((currentTime - convertedTime) / 1000);

        // Calculate time difference in minutes
        const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);

        // Format the output
        const formattedOutput = `${timeDifferenceInMinutes} mins ago (${convertedTime.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })} +UTC)`;

        // Set the formatted time state
        setFormattedTime(formattedOutput);
    }, [timestamp]); // Re-run effect whenever timestamp prop changes

    return (
        <div>
            {formattedTime}
        </div>
    );
};

export default TimeConverter;
