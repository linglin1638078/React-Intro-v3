import React, { useState } from 'react';

const userForm = () => {
    const [usernames, setUsername] = useState(" ");

    const updateUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div>
            <p>Username: {usernames}</p>
            {/* a button that calls addPoint on click */}
            <input value = {usernames} onChange = {updateUsername} />
        </div>
    );
};

export default userForm;