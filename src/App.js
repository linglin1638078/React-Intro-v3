import './App.css';
import logo from './logo.svg';
import React from 'react';
import RouterComponent from './components/RouterComponent';
import { Link } from 'react-router-dom';


const appStyles = {
  backgroundColor: "cornSilk"
};

function App() {
  
  

  





  // // After you load for the first time, grab our users
  // useEffect(() => {
  //   // getUsers();
  // });
 

  

  return (
    <div className="App" style={appStyles}>
      <img src={logo} className="App-logo" alt="logo" />
      
      <RouterComponent />
      
      <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/user-gallery"><button>Gallery</button></Link>
        <Link to="/colors"><button>Colors</button></Link>
        <Link to = "/register"><button>Register</button></Link>
      </div>
    </div>
  );
}

export default App;
