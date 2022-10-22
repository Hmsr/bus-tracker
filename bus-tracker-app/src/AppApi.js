
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
        body: content
    }).then(res => res.json());
}

export const fetchStationList = fetchApi(`https://stationslist.azurewebsites.net/api/Stations`);
export const fetchBusList = fetchApi(``);
export function postBusArrived(content) { postApi('', content) };
export function postBusDeparted(content) { postApi('', content) };
