import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import Pin from "./Pin.js"




export default function Map(props) {
  const [centerPosition, setCenterPosition] = React.useState(
    {lat: -37.8068717725, long: 144.970312785}
  )
  


    return (
      <MapContainer center={[centerPosition.lat, centerPosition.long]} zoom={12}scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      
      />
      {props.pins}
      </MapContainer>
    )
}