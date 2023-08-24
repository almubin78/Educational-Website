import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {


    return (
        <div>
            <Link to='/' className='btn m-5'>প্রথম পেজে ফিরে যাও</Link>
            <div className='text-center mt-5'>
                <p>This page is under developing</p>
                <progress className="progress w-56"></progress>
            </div>
        </div>
    );
};

export default Error;