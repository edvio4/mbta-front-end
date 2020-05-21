import React, {useState, useEffect} from 'react';
import Departure from './Departure';
import departureService from '../services/departures';

const northStation = 'place-north';
const southStation = 'place-sstat';

function Departures()  {
    const [departures, setDepartures] = useState([]);
    const [station, setStation] = useState(northStation);

    const hook = () => {
        (async function getDepartures() {
            const response = await departureService.getAll(station);
            response.sort((a,b) => Date.parse(a.departureTime) - Date.parse(b.departureTime));
            setDepartures(response);
        })();
    }

    useEffect(hook, [station]);

    return (
        <div>
            <h1>Departures: {station === southStation ? 'South Station' : 'North Station'}</h1>
            <div>
                <button onClick={() => setStation(station === southStation ? northStation : southStation)}>
                    switch to {station === southStation ? 'North Station' : 'South Station'}
                </button>
            </div>
            <ul>
                {departures.map(departure =>
                    <Departure
                        key={departure.trainNumber}
                        departure={departure}
                    />
                )}
            </ul>
        </div>
    );
}

export default Departures;