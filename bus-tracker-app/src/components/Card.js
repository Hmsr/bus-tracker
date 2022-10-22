import React from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';

export default function Card(props){

    const handleClick = event => {
        props.toggleDetails(props.bus)
    }
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
    console.log(props.bus.route)
    return (
        <div className="card" onClick={handleClick}>
           
           <img className="card--occupancy--icon" src={`images/${busIcon}`}  />
            <p>Route: {props.bus.route}</p>
            <p>ETA: {props.bus.eta}</p>
            <p>Occupancy: {props.bus.occupancy}</p>
            <p>Location: {props.bus.location}</p>
        
        </div>
    )

}