import React, { useState } from 'react';

const CookieCounter = () => {
    
    const [cookies, setCookies] = useState(0);
    const addCookie = () => {
        setCookies(cookies + 1);
      }
    return (
        <div>
            <p className='cookieCounter'>Cookies: {cookies}</p>
            <button onClick={addCookie}>Add One cookie</button>
        </div>
    );
};

export default CookieCounter;