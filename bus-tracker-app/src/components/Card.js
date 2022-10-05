import react from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';
export default function Card(props){
    return (
        <div className="card">
            <p>Route: {props.route}</p>
            <p>ETA: {props.eta}</p>
            <p>Occupancy: {props.occupancy}</p>
            <p>Location: {props.location}</p>
        </div>
    )

}