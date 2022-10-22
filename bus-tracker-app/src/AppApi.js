
function fetchApi(url){
    return fetch(url)
    .then(res => res.json());
}


export const fetchStationList = fetchApi(`https://stationslist.azurewebsites.net/api/Stations`);