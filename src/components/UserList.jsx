import React, { useEffect, useState } from 'react';
import SingleUserCard from './SingleUserCard';
import PropTypes from 'prop-types';

const dummyUsers = [
    { id: 1, name: 'Ben' },
    { id: 2, name: 'Louis' },
    { id: 3, name: 'Daisy' },
    { id: 4, name: 'Lola' },
]

const UserList = ({users}) => {
   
    return (
        
        <div>
            {[<p key={1}>Item One</p>, <p key={2}>Item Two</p>]}
            {/*it has to use one single line*/}
            {users.map((user) => {
                return <SingleUserCard key={user.id} user={user}/>
            })}
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
}

export default UserList;