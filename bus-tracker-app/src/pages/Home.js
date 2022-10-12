import React from "react";
import '../App.css';
import Nav from "../components/navbar/Nav.js"
import Map from "../components/Map.js"
import Pin from "../components/Pin.js"
import Card from "../components/Card.js"
import 'bootstrap/dist/css/bootstrap.min.css'

export function Home() { 
  const [busJson, setBusJson] = React.useState([
    { busId: 1111, 
      driverName: "Terry", 
      lat: -37.8068717725, 
      long: 144.970312785, 
      eta: '0:0:10',
      route: "City Loop",
      location: "City",
      occupancy: "busy"}, 
    { busId: 2222, 
      driverName: "Eliza", 
      lat: -37.812717725, 
      long: 144.956312785, 
      eta: '0:0:33',
      route: "City Loop",
      location: "City",
      occupancy: "Empty"},
    { busId: 3333, 
      driverName: "Eric", 
      lat: -37.82717725, 
      long: 144.956312785, 
      eta: '0:3:40',
      route: "City Loop",
      location: "City",
      occupancy: "Quite busy"}  
    ]  
  );
    
      
    
      const busPins = busJson.map(bus => {
        return (<div>
          <Pin lat={bus.lat} long={bus.long} busId={bus.busId} eta={bus.eta} key={bus.id}/>          </div>
        )
      }
      )
      
      const busCards = busJson.map(bus => {
        return (
        <div>
          <Card route={bus.route} eta={bus.eta} occupancy={bus.occupancy} location={bus.location}/>
          <Card route={bus.route} eta={bus.eta} occupancy={bus.occupancy} location={bus.location} key={bus.id}/>
        </div>)
      })
    
      return (
        <div className="App">
          <Nav />
          <Map pins={busPins} />
          <div className="cardsList">
          {busCards}
          </div>
        </div>
      );
}

export default Home