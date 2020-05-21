import axios from 'axios';

const baseUrl = '/api/departures';

const getAll = async function getAll(station) {
    let params = {};

    if (station) {
        params.station = station;
    }
    const response = await axios.get(baseUrl,  {
        params: params
    });
    return response.data;
}

export default { getAll };
