import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

const busIcon = new L.Icon({
    iconUrl: require('../static/busicon.png'),
    
        shadowSize:   [50, 64],
        
        shadowAnchor: [4, 62],
        popupAnchor:  [0, 0],
    iconSize: new L.Point(20, 20),
    
});


export default function Map(props) {
  const [centerPosition, setCenterPosition] = React.useState(
    {lat: -37.8068717725, long: 144.970312785}
  )
  const [busJson, setBusJson] = React.useState([
    { busId: 4523, 
      driverName: "someone", 
      lat: -37.8068717725, 
      long: 144.970312785, 
      eta: '0:0:10'}, 
    { busId: 4522, 
      driverName: "someone", 
      lat: -37.812717725, 
      long: 144.956312785, 
      eta: '0:0:33'},
      { busId: 4525, 
        driverName: "someone", 
        lat: -37.82717725, 
        long: 144.956312785, 
        eta: '0:3:40'}  
    ]  
  );

const busElements = busJson.map(bus => {
  return (<div>
    <Marker 
      position={[bus.lat, bus.long]}
      icon={ busIcon }
    >
    <Popup>
       Bus ID: {bus.busId} <br /> Bus ETA: {bus.eta}
      </Popup>
    </Marker>
    
    </div>
  )
}
)
    return (
      <MapContainer center={[centerPosition.lat, centerPosition.long]} zoom={12}scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {busElements}
      </MapContainer>
    )
}