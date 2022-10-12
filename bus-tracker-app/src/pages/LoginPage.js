import React from 'react';
import Login from '../components/login/Login.js';
import Nav from "../components/navbar/Nav.js"

export function LoginPage (){
  return (
    <>
      <Nav/>
      <Login/> 
    </>
  )
}

export default LoginPage