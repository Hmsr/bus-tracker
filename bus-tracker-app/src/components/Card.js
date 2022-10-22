import React from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';

export default function Card(props){

    const handleClick = event => {
        props.toggleDetails(props.bus)
    }
    
    console.log(props.bus.route)
    return (
        <div className="card" onClick={handleClick}>
           
            
            <p>Route: {props.bus.route}</p>
            <p>ETA: {props.bus.eta}</p>
            <p>Occupancy: {props.bus.occupancy}</p>
            <p>Location: {props.bus.location}</p>
        
        </div>
    )

}