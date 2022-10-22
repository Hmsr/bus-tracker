import React from 'react';
import Login from '../components/login/Login.js';
import Nav from "../components/navbar/Nav.js"
import { SelectBox } from '../components/selectBox/select.js';

export function LoginPage (){
  return (
    <>
      <Nav/>
      <Login /> 
     {/*  <SelectBox/> */}
    </>
  )
}

export default LoginPage