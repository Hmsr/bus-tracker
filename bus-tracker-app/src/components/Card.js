import React from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';

export default function Card(props){

    const handleClick = event => {
        props.toggleDetails(props.bus)
    }
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
    
    return (
        <div className="card" onClick={handleClick}>
           
           <img className="card--occupancy--icon" src={`images/${busIcon}`}  />
            <p>Bus: {props.bus.busID}</p>
            <p>Route: {props.bus.disruptionEnd}</p>
            <p>ETA: {props.bus.eta}</p>
            <p>Occupancy: {props.bus.occupancy}%</p>
            <p>Location: {props.bus.busLastStop}</p>
        
        </div>
    )

}