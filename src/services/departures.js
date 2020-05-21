import axios from 'axios';

const baseUrl = '/api/departures';

let getAll = async function getAll(station) {
    let params = {};

    if (station) {
        params.station = station;
    }
    let response = await axios.get(baseUrl,  {
        params: params
    });
    return response.data;
}

export default { getAll };
