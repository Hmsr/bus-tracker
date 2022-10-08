import React from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';
import Details from "./Details.js"
export default function Card(props){
    const [clicked, setClicked] = React.useState(false)

    function handleClick() {
        setClicked(prevClicked => !prevClicked)
        console.log(clicked);
    }
    
    return (
        <div>
            {clicked == true ? <Details route={props.route}/> : ''}
        <div className="card" onClick={handleClick}>
            
            <p>Route: {props.route}</p>
            <p>ETA: {props.eta}</p>
            <p>Occupancy: {props.occupancy}</p>
            <p>Location: {props.location}</p>
        </div>
        </div>
    )

}