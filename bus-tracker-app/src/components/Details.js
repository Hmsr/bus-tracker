import React from "react"

export default function Details(props) {
    return (
    <div className="card--details">
    <p>Route: {props.bus.route}</p>
    </div>
    
    )
}