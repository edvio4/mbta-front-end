import React from 'react';
import moment from 'moment-timezone';

let Departure = function Departure({ departure }) {
    return (
        <tr>
            <td>{ departure.carrier }</td>
            <td>{ moment(departure.departureTime).tz('America/New_York').format('h:mm A') }</td>
            <td>{ departure.destination }</td>
            <td>{ departure.trainNumber }</td>
            <td>{ departure.trackNumber || 'TBD' }</td>
            <td>{ departure.status }</td>
        </tr>
    );
}

export default Departure;