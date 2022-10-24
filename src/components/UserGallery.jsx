import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserGallery = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  //const [loading, setLoading] = useState(false);
  //const [updateCount, setUpdateCount] = useState(0);

  const getUsers = async () => {
    //setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    //const response = await axios.get("https://reqres.in/api/users?page=1");
    const json = await response.json();
    setUsers(json.data);
    //setLoading(false);
  };

    // After you load for the first time, grab our users
    useEffect(() => {
      console.log("FIRST USE EFFECT KICKED OFF")
      getUsers();
    }, []);
  
    useEffect(() => {
      console.log("SECOND USE EFFECT KICKED OFF")
      setUserCount(users.length);
    }, [users]);//run this usereffect when the array is update
  
  // Anytime the users state updates,
  // count how many times we've updated it
  /*useEffect(() => {
    console.log("SECOND USE EFFECT KICKED OFF")
    setUpdateCount(updateCount + 1);
  }, [users]);*/
  
  //if (loading) return <p>Loading...</p>;
  
  return (
    <div>
      {users.map((user) => (
        <img key={user.id} src={user.avatar} alt = 'avatar'/>
      ))}
    </div>
  );
};

UserGallery.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default UserGallery;
