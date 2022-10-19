import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
//import PointCounter from './components/PointCounter';
//import CookieCounter from './components/CookieCounter';
import Counters from './components/Counters';
//import Counter from './components/Counter';
//import userForm from './components/userForm';
//import Box from './components/Box';
// from './components/ColorSelector';
import UserList from './components/UserList';
import UserGallery from './components/UserGallery';


function App() {
  //[variable, setterForVar]
  
  //if parent want to know the state of child, it has to pass down as props
  //in react- only can go down 
  

  const appStyles = {
    backgroundColor: 'cornSilk'
  }
  //move the users from userlist to app.js and pass down to userlist and userGallery as props, since it can not go from userlist up 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);


  //cannot async the useEffect, has to async the helper function, and pass the function to useEffect
  const getUsers = async () => {
      setLoading(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const json = await response.json();
      setUsers([...json.data]);
      setLoading(false);
  }

  //able to deal with no matter how many users
  useEffect(() => {
      //dummyUsers.push({id:5, name:'Lizzy})
      //if don't user [...], it will not re-render if data is update, because it is pass by reference
      getUsers();
  }, []);

  // After you load for the first time, grab our users
  /*useEffect(() => {
    console.log("FIRST USE EFFECT KICKED OFF")
    getUsers();
  }, []);*/

  // Anytime the users state updates, 
  // count how many times we've updated it
  // useEffect(() => {
  //   console.log("SECOND USE EFFECT KICKED OFF")
  //   setUpdateCount(updateCount + 1);
  // }, [users, loading, updateCount]);

  // // After you load for the first time, grab our users
  // useEffect(() => {
  //   // getUsers();
  // });
  console.log(updateCount)

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App" style={appStyles}>
      
      <img src={logo} className="App-logo" alt="logo" />
      {/*display points*/}
      
      {/*create new html/component*/}
      {/*each PointCounter has its own state*/}
      
      {/*<Counters />
      <userForm />*/}
      <p>UPDATES: {updateCount}</p>
      <UserGallery key={users}/>
      <UserList key={users}/>
      
        
    </div>
  );
}

export default App;
