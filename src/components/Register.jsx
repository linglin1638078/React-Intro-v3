import axios from 'axios';
import React, { useState } from 'react';

const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
}

const Register = () => {
    const [username, setUsername] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userType, setUserType] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const handleCheckUpdate = (event) => {
        event.preventDefault();//prevent default functionality before react is build
        console.log('va: ', event.target.value);
        setCheckbox(event.target.value);
    }

    const handleUserSelect = (event) => {
        setUserType(event.target.value);
    }


    //has full control of input
    const handleUsernameInput = (event) => {
        setUsername(event.target.value);

        if (username.length < 3) setIsValidUsername(false);
        else setIsValidUsername(true);
    }
    console.log({
        username
    })

    /*const handlePhoneNumberInput = (event) => {
        const { value } = event.target;
        if (typeof +value !== "number") return;
        setPhoneNumber(value);
    }*/
    
    //axios.get('/isValidUsername/{username}")
    //based on the result, setIsValidUsername
    const handleFormSubmit = (event) => {
        event.preventDefault();//stop browser submitting itself
        if (!isValidUsername) {
            axios.post('reqres.in/api/uers', {
                name: username,
                job:userType
            })
        }
        
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} style={formStyles}>
                <label>
                    Username:
                    <input value={username} onChange={handleUsernameInput} type='text'></input>
                    if(!isValidUsername)?(<p>Your username is valid</p>):(<p>Your username is invalid</p>)
                    {/*(!isValidUsername&&<p>Your username is invalid</p>*/}
                </label>
                
                <label>
                    Password:
                    <input type='text'></input>
                </label>
                
                <label>
                    Admin Type:
                    <select value = {userType} onChange = {handleUserSelect}>
                        <option>User</option>
                        <option>Admin</option>
                        <option>Super Admin</option>
                    </select>
                </label>
                
                
                <label>
                    Is checked: 
                    <input value={checkbox} onChnge={handleCheckUpdate} type='checkbox'></input>
                </label>
                
                <button type = 'submit'>Submit Form</button>
            </form>
        </div>
    );
};

export default Register;