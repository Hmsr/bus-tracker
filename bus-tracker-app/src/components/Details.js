import React from "react"
import { postBusArrived, postBusDeparted } from "../AppApi";

export default function Details(props) {
    const [arrivedVisible, setArrivedVisible] = React.useState(true)
    const [routeVisible, setRouteVisible] = React.useState(true)
    function handleArrivedClick() {
        setArrivedVisible(prevVisible => (
            !prevVisible)
        )
        props.busArrived(true);

        let postBody = {
          "busID": props.bus.busID,
          "disruptionID": props.bus.disruptionID,
          "stationID": props.selectedStation
        }

        postBusArrived(postBody);
    }

    function handleRouteClick() {
      setRouteVisible(prevVisible => (
          !prevVisible)
      )
      ;
    }

    function handleDepartedClick() {
      let postBody = {
        "busID": props.bus.busID,
        "disruptionID": props.bus.disruptionID,
        "stationID": props.selectedStation,
        "occupancy": occupancy
      };

      postBusDeparted(postBody);

      props.processBusDeparture();
    }
    
    const [occupancy, setOccupancy] = React.useState();
    let busIcon;
      
      if (props.bus.occupancy == 0) { 
        busIcon = "green.png"
      } else if (props.bus.occupancy == 25) {
        busIcon = "yellow.png"
      } else if (props.bus.occupancy == 50) {
        busIcon = "orange.png"
      } else if (props.bus.occupancy == 75) {
        busIcon = "darkorange.png"
      } else {
        busIcon = "red.png"
      }
    

    const handleChange=(e)=>{
        setOccupancy(e.target.value);        
     }

    const routeList = props.stationList.map(station => {
      return (
       <div >
      <input id={station.stationID}type="checkbox" name={station.name} value={station.stationID} label={station.name}/>
      <label for={station.stationID}>{station.name}</label>
      </div> 
      )
    }
    )

    

    return (
    <div className="card--details">
    <img className="details--icon" src={`images/${busIcon}`}  />
    <p>BusID: {props.bus.busID}</p>
    <p>Route: {props.bus.busLine}</p>
    {routeVisible ? <button className="details--button" onClick={handleRouteClick} >Change Route</button> : <div> <div className="routeChangeList">
      <form>{routeList}</form>
       
       </div>
       <button onClick={handleRouteClick} className="details--button">Submit Route</button>
       </div>}
    
    <p>ETA: {props.bus.eta}</p>
    <p>Occupancy: {props.bus.occupancy}</p>
    <p>Current Location : {props.bus.busLastStop}</p>
    {arrivedVisible ? <button className="details--button" onClick={handleArrivedClick} >Arrived</button> : (
        <div className="radiogroup">
          
        <form>
        <div className="wrapper">
            <input className="state" type="radio" value="0" id="0"
              onChange={handleChange} name="occupancy" />
              <span class="text">0%</span>
            <div class="indicator"></div>
        </div>
        <div className="wrapper">
            <input className="state" type="radio" value="25" id="25"
              onChange={handleChange} name="occupancy" />
              <span class="text">25%</span>
            <div class="indicator"></div>
            </div>

        <div className="wrapper">
            <input className="state" type="radio" value="50" id="50"
              onChange={handleChange} name="occupancy" />
              <span class="text">50%</span>
            <div class="indicator"></div>
            </div>

        <div className="wrapper">
            <input className="state" type="radio" value="75" id="75"
              onChange={handleChange} name="occupancy" />
              <span class="text">75%</span>
            <div class="indicator"></div>
            </div>

            <div className="wrapper">
            <input className="state" type="radio" value="100" id="100"
              onChange={handleChange} name="occupancy" />
              <span class="text">100%</span>
            <div class="indicator"></div>
            </div>

           
         </form>
        
         <button className="details--button" onClick={handleDepartedClick}>Departed</button>
        </div>
        
        )
        
    }
    </div>
    
    )
}