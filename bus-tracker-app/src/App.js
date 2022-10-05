import React from "react"
import './App.css';
import Nav from "./components/navbar/Nav.js"
import Map from "./components/Map.js"
import Pin from "./components/Pin.js"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [busJson, setBusJson] = React.useState([
    { busId: 1111, 
      driverName: "Terry", 
      lat: -37.8068717725, 
      long: 144.970312785, 
      eta: '0:0:10'}, 
    { busId: 2222, 
      driverName: "Eliza", 
      lat: -37.812717725, 
      long: 144.956312785, 
      eta: '0:0:33'},
      { busId: 3333, 
        driverName: "Eric", 
        lat: -37.82717725, 
        long: 144.956312785, 
        eta: '0:3:40'}  
    ]  
  );

  const busPins = busJson.map(bus => {
    return (<div>
      <Pin lat={bus.lat} long={bus.long} busId={bus.busId} eta={bus.eta}/>
      </div>
    )
  }
  )


  return (
    <div className="App">
      <Nav />
      <Map pins={busPins} />
    </div>
  );
}

export default App;
