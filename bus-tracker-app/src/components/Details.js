import React from "react"

export default function Details(props) {
    const [arrivedVisible, setArrivedVisible] = React.useState(true)
    function handleArrivedClick() {
        setArrivedVisible(prevVisible => (
            !prevVisible)
        )
        
    }
    
    const [occupancy, setOccupancy] = React.useState();

    let busIcon;
      if (props.bus.occupancy == "Empty") { 
        busIcon = "green.png"
      } else if (props.bus.occupancy == "NearlyEmpty") {
        busIcon = "yellow.png"
      } else if (props.bus.occupancy == "QuiteFull") {
        busIcon = "orange.png"
      } else if (props.bus.occupancy == "Full") {
        busIcon = "red.png"
      } else {
        busIcon = "red.png"
      }
    
      
    
    
    
    
    

    const handleChange=(e)=>{
        setOccupancy(e.target.value);
        
     }
    return (
      
    
    <div className="card--details">
    <img className="details--icon" src={`images/${busIcon}`}  />
    <p>BusID: {props.bus.busId}</p>
    <p>Route: {props.bus.route}</p>
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
         <button className="details--button">Departed</button>
        </div>
        
        )
        
    }
    </div>
    
    )
}