import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { Icon } from "leaflet";

export default function Map() {
    return (
        <MapContainer center={[-37.8068717725, 144.970312785]} zoom={12}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-37.8068717725, 144.970312785]}>
    <Popup>
      Melbourne Central Station<br />Bus Replacement Service
    </Popup>
  </Marker>
    </MapContainer>

    )
}