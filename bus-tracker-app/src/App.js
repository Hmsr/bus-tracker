import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
/*import Nav from "./components/navbar/Nav.js"
import Map from "./components/Map.js"
import Pin from "./components/Pin.js"
import 'bootstrap/dist/css/bootstrap.min.css'; */
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home"
import SelectPage from "./pages/SelectPage"
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/login/select' element={<SelectPage />} />
    </Routes>
  </Router>
  )


  
}

export default App;
