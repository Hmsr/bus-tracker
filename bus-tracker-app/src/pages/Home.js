import React, { useEffect } from "react";
import '../App.css';
import Nav from "../components/navbar/Nav.js"
import Map from "../components/Map.js"
import Pin from "../components/Pin.js"
import Card from "../components/Card.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import StationSelect from "../components/StationSelect.js"
import Details from "../components/Details.js"
import { fetchStationList } from "../AppApi.js";


export function Home() { 
  
  const [stationList, setStationList] = React.useState([]);
  const [selectedStation, setSelectedStation] = React.useState(1041);
  const [selectedBus, setSelectedBus] = React.useState();

  const [busJson, setBusJson] = React.useState([
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
      occupancy: "NearlyEmpty"}  
    ]  
  );
      
  useEffect(() => {
    getStationList();
  }, []);

  const getStationList = () => {
    fetchStationList.then(response => {
      setStationList(response);      
    });
  }

  const selectStation = (stationID) => {
    setSelectedStation(stationID);
    // fetchAllBuses
  }


  function handleClick(bus) {
    if(selectedBus && selectedBus !== undefined && selectedBus.busId === bus.busId){
      setSelectedBus(null);
    } else {
      setSelectedBus(bus);
    }
  }
    
  const busCards = busJson.map(bus => {
    return (
      <div >
        <Card  bus={bus} toggleDetails={handleClick}/>
      </div>
    )
  })

  return (
    <div className="App">
      {(selectedBus && selectedBus !== undefined) ? <Details bus={selectedBus} /> : ''}
      <Nav />
      <StationSelect stationList={stationList} setStation={selectStation}/>
      <div className="cardsList">
        {busCards}
      </div>
    </div>
  );
}

export default Home