
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
export const fetchBusList = fetchApi(`https://incomingbuses20221022164958.azurewebsites.net/api/IncomingBuses`);
export function postBusArrived(content) { postApi('', content) };
export function postBusDeparted(content) { postApi('', content) };


function fetchMockBuses(){
    console.log('returning mock buses');
    return [
        { busId: 1111, 
          driverName: "Terry", 
          lat: -37.8068717725, 
          long: 144.970312785, 
          eta: '0:0:10',
          route: "City Loop",
          location: "City",
          occupancy: "Full"}, 
        { busId: 2222, 
          driverName: "Eliza", 
          lat: -37.812717725, 
          long: 144.956312785, 
          eta: '0:0:33',
          route: "Routey Rout",
          location: "City",
          occupancy: "Empty"},
        { busId: 3333, 
          driverName: "Eric", 
          lat: -37.82717725, 
          long: 144.956312785, 
          eta: '0:3:40',
          route: "Route 1",
          location: "City",
          occupancy: "NearlyEmpty"
        }
    ]
}