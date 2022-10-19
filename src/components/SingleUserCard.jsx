import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SingleUserCard = ({ user }) => {

    const userCard = {
        display:'flex'
    }

    const [clicked, setClicked] = useState(false);
    const textInfo = {
      display: "flex",
      flexDirection: "column",
      backgroundColor: clicked ? "dodgerblue" : "lightgray",
      width: "100vw",
      border: "4px solid black",
    };
    return (
      <div style={userCard} onClick={() => setClicked(!clicked)}>
        <img src={user.avatar} alt = 'avator'></img>
        <div style={textInfo}>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>{user.email}</p>
        </div>
      </div>
    );
};

SingleUserCard.proTypes = {
    user: PropTypes.object,
}

export default SingleUserCard;