import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import React from 'react';
//import PointCounter from './components/PointCounter';
//import CookieCounter from './components/CookieCounter';
import Counters from './components/Counters';
//import Counter from './components/Counter';
//import userForm from './components/userForm';
//import Box from './components/Box';
// from './components/ColorSelector';


function App() {
  //[variable, setterForVar]
  
  //if parent want to know the state of child, it has to pass down as props
  //in react- only can go down 
  

  const appStyles = {
    backgroundColor: 'cornSilk'
  }

 

  return (
    <div className="App" style={appStyles}>
      
      <img src={logo} className="App-logo" alt="logo" />
      {/*display points*/}
      
      {/*create new html/component*/}
      {/*each PointCounter has its own state*/}
      
      <Counters />
      <userForm />
      
      
        
    </div>
  );
}

export default App;
