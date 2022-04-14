import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-danger my-3 text-center '>
                Page Not Found :(
            </h1>
            <h1 className='text-danger my-3 text-center '>
                404
            </h1>
            <button onClick={() => navigate('/home')} className='btn btn-warning'>
                Go Back To Home
            </button>
        </div>
    );
};

export default NotFound;