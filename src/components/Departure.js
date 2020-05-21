import React from 'react';

function Departure({ departure }) {
    return (
        <>
            <li>
                Carrier: { departure.carrier }
            </li>
            <li>
                Time: { departure.departureTime }
            </li>
            <li>
                Destination: { departure.destination }
            </li>
            <li>
                Train#: { departure.trainNumber }
            </li>
            <li>
                Track#: { departure.trackNumber }
            </li>
            <li>
                Status: { departure.status }
            </li>
            ------
        </>
    );
}

export default Departure;