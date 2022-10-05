import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

export default function Pin(props) {
    const busIcon = new L.Icon({
        iconUrl: require('../static/busicon.png'),
        shadowSize:   [50, 64],   
        shadowAnchor: [4, 62],
        popupAnchor:  [0, 0],
        iconSize: new L.Point(20, 20),
        
    });

    return (
        <Marker 
        position={[props.lat, props.long]}
        icon={ busIcon }
        >
        <Popup>
         Bus ID: {props.busId} <br /> Bus ETA: {props.eta}
        </Popup>
      </Marker>

    )
}

