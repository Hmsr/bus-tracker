
function fetchApi(url){
    return fetch(url)
    .then(res => res.json());
}


function postApi(url, content){
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }).then(res => res.json());
}

export const fetchStationList = fetchApi(`https://stationslist.azurewebsites.net/api/Stations`);
export const fetchBusList = fetchApi(`https://incomingbuses.azurewebsites.net/api/IncomingBuses/1019`);
export function fetchBusById(busId) { return fetchApi(`https://incomingbuses.azurewebsites.net/api/IncomingBuses/` + busId) };
export function postBusArrived(content) { postApi('https://busarrived.azurewebsites.net/api/BusArriveds', content) };
export function postBusDeparted(content) { postApi('https://busdepartured.azurewebsites.net/api/BusDepartureds', content) };