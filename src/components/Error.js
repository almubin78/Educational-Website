import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {

       
    return (
        <div>
            <Link to='/' className='btn'>Back to Home Page</Link>
            <p>Error 404 or this page is under developing</p>
        </div>
    );
};

export default Error;