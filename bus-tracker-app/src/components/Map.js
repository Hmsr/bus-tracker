import React from 'react'
import { Polyline, MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import Pin from "./Pin.js"





export default function Map(props) {
  const [centerPosition, setCenterPosition] = React.useState(
    {lat: -37.8068717725, long: 144.970312785}
  )
  const coburgStation = [-37.742335, 144.963484];
  const morelandStation = [-37.754263, 144.961766];
  const ansteyStation = [-37.760676, 144.960901];
  const brunswickStation = [-37.767721, 144.959682];
  const jewellStation = [-37.775090, 144.958823];
  const royalParkStation = [-37.781433, 144.951768];
  const flemingtonBridgeStation = [-37.788122, 144.939145];

  const line1 = [
    coburgStation,
    morelandStation,
    ansteyStation,
    brunswickStation,
    jewellStation,
    royalParkStation,
    flemingtonBridgeStation
  ];

    return (
      <MapContainer center={[centerPosition.lat, centerPosition.long]} zoom={12}scrollWheelZoom={false}>
      
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />
      
      <Polyline positions={line1} color="red" />
      {props.pins}
      </MapContainer>
    )
}