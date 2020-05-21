import React from 'react';
import moment from 'moment';

let Departure = function Departure({ departure }) {
    return (
        <tr>
            <td>{ departure.carrier }</td>
            <td>{ moment(departure.departureTime).format('h:mm A') }</td>
            <td>{ departure.destination }</td>
            <td>{ departure.trainNumber }</td>
            <td>{ departure.trackNumber || 'TBD' }</td>
            <td>{ departure.status }</td>
        </tr>
    );
}

export default Departure;