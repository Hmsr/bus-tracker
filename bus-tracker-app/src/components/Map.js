import React from 'react'
import { Polyline, MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import Pin from "./Pin.js"




export default function Map(props) {
  const [centerPosition, setCenterPosition] = React.useState(
    {lat: -37.8068717725, long: 144.970312785}
  )
  const pos = [
    [-37.8068717725, 144.970312785],
    [34.789594, 135.438084], //to jpn
    [36.460353, 126.440674],
    [55.410343, 37.902312], //to rus
    [36.460353, 126.440674],
    [40.085148, 116.552407] //to chi
  ];


    return (
      <MapContainer center={[centerPosition.lat, centerPosition.long]} zoom={12}scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      
      />
      
      <Polyline positions={pos} color="red" />
      {props.pins}
      </MapContainer>
    )
}