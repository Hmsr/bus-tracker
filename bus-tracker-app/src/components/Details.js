import React from "react"

export default function Details(props) {
    return (
    <div className="card--details">
    <p>BusID: {props.bus.busId}</p>
    <p>Route: {props.bus.route}</p>
    <p>ETA: {props.bus.eta}</p>
    <p>Occupancy: {props.bus.occupancy}</p>
    <p>Current Location : {props.bus.location}</p>
    <button>Arrived</button>
    </div>
    
    )
}