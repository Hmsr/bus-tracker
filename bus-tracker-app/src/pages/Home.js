import React, { useEffect } from "react";
import '../App.css';
import Nav from "../components/navbar/Nav.js"
import Map from "../components/Map.js"
import Pin from "../components/Pin.js"
import Card from "../components/Card.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import StationSelect from "../components/StationSelect.js"
import Details from "../components/Details.js"
import { fetchBusList, fetchStationList, fetchBusById } from "../AppApi.js";


export function Home() { 
  
  const [stationList, setStationList] = React.useState([]);
  const [selectedStation, setSelectedStation] = React.useState(1041);
  const [selectedBus, setSelectedBus] = React.useState();
  const [busJson, setBusJson] = React.useState([]);
  const [processigBusArrival, setProcessingBusArrival] = React.useState(false)    

  const getBuses = () => {
    fetchBusList.then(response => {
      setBusJson(response);
    });
  }

  useEffect(() => {
    getStationList();
    getBuses();
  }, []);

  const getStationList = () => {
    fetchStationList.then(response => {
      setStationList(response);      
    });
  }

  const selectStation = (stationID) => {
    setSelectedStation(stationID);
    fetchBusById(stationID).then(response => {
      setBusJson(response);
    });
  }

  const busArrived = (isProcessingArrival) => {
    setProcessingBusArrival(isProcessingArrival);
  }

  const processBusDeparture = () => {
    setProcessingBusArrival(false);
    setSelectedBus(null);
  }

  function handleClick(bus) {
    if(!processigBusArrival){
      if(selectedBus && selectedBus !== undefined && selectedBus.busId === bus.busId){
        setSelectedBus(null);
      } else {
        setSelectedBus(bus);
      }
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
      {(selectedBus && selectedBus !== undefined) ? <Details bus={selectedBus} stationList={stationList} busArrived={busArrived} processBusDeparture={processBusDeparture}/> : ''}
      <Nav />
      <StationSelect stationList={stationList} setStation={selectStation}/>
      <div className="cardsList">
        {busCards}
      </div>
    </div>
  );
}

export default Home