import React from "react"

export default function Details(props) {
    const [arrivedVisible, setArrivedVisible] = React.useState(true)
    const [routeVisible, setRouteVisible] = React.useState(true)
    function handleArrivedClick() {
        setArrivedVisible(prevVisible => (
            !prevVisible)
        )
        props.busArrived(true);
    }
    function handleRouteClick() {
      setRouteVisible(prevVisible => (
          !prevVisible)
      )
      ;
  }

    function handleDepartedClick() {
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
    console.log(props.stationList);
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
    <p>BusID: {props.bus.busId}</p>
    <p>Route: {props.bus.route}</p>
    {routeVisible ? <button className="details--button" onClick={handleRouteClick} >Change Route</button> : <div> <div className="routeChangeList">
      <form>{routeList}</form>
       
       </div>
       <button onClick={handleRouteClick} className="details--button">Submit Route</button>
       </div>}
    
    <p>ETA: {props.bus.eta}</p>
    <p>Occupancy: {props.bus.occupancy}</p>
    <p>Current Location : {props.bus.location}</p>
    {arrivedVisible ? <button className="details--button" onClick={handleArrivedClick} >Arrived</button> : (
        <div className="radiogroup">
          
        <form>
        <div className="wrapper">
            <input className="state" type="radio" value="Empty" id="Empty"
              onChange={handleChange} name="occupancy" />
              <span class="text">Empty</span>
            <label  className="label" for="Empty"></label>
            <div class="indicator"></div>
        </div>
        <div className="wrapper">
            <input className="state" type="radio" value="NearlyEmpty" id="NearlyEmpty"
              onChange={handleChange} name="occupancy" />
              <span class="text">Nearly Empty</span>
            <label className="label" for="NearlyEmpty"></label>
            <div class="indicator"></div>
            </div>

        <div className="wrapper">
            <input className="state" type="radio" value="QuiteFull" id="QuiteFull"
              onChange={handleChange} name="occupancy" />
              <span class="text">Quite Full</span>
            <label className="label" for="QuiteFull"></label>
            <div class="indicator"></div>
            </div>

        <div className="wrapper">
            <input className="state" type="radio" value="Full" id="Full"
              onChange={handleChange} name="occupancy" />
              <span class="text">Full</span>
            <label className="label" for="Full"></label>
            <div class="indicator"></div>
            </div>

           
         </form>
         <p>{occupancy}</p>
         <button className="details--button" onClick={handleDepartedClick}>Departed</button>
        </div>
        
        )
        
    }
    </div>
    
    )
}