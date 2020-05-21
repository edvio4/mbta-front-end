import React, {useState, useEffect} from 'react';
import Departure from './Departure';
import departureService from '../services/departures';
import moment from 'moment';

const northStation = 'place-north';
const southStation = 'place-sstat';

let Departures = function Departures()  {
    const [departures, setDepartures] = useState([]);
    const [station, setStation] = useState(northStation);
    const [refresh, setRefresh] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    let hook = function hook() {
        (async function getDepartures() {
            setIsLoading(true);
            const response = await departureService.getAll(station);
            setIsLoading(false);
            response.sort((a,b) => Date.parse(a.departureTime) - Date.parse(b.departureTime));
            setDepartures(response);
        })();
    }

    useEffect(hook, [station, refresh]);

    return (
        <div className="departures">
            <h1>{station === southStation ? 'South Station' : 'North Station'} Departures</h1>
            <h2>{ moment().format('MMMM D, YYYY, h:mm A') }</h2>
            <div>
                <button className="button-switch-station" onClick={() => setStation(station === southStation ? northStation : southStation)}>
                    Switch to {station === southStation ? 'North Station' : 'South Station'}
                </button>
                <button onClick={() => setRefresh(!refresh)}>
                    Refresh
                </button>
            </div>
            <br/>
            {!isLoading &&
                <table>
                    <tbody>
                    <tr>
                        <th>Carrier</th>
                        <th>Time</th>
                        <th>Destination</th>
                        <th>Train#</th>
                        <th>Track#</th>
                        <th>Status</th>
                    </tr>
                    {departures.map(departure =>
                        <Departure
                            key={departure.trainNumber}
                            departure={departure}
                        />
                    )}
                    </tbody>
                </table>
            }
            {isLoading &&
                <div>Loading...</div>
            }
        </div>
    );
}

export default Departures;