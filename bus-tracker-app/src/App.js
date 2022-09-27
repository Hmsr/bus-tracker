import './App.css';
import Nav from "./components/Nav.js"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src="images/facey.png" className="App-logo" alt="logo" />
        <p>
          Bus Tracker
        </p>
        
      </header>
    </div>
  );
}

export default App;
