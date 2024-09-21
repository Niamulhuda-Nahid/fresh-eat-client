import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className=' flex justify-center items-center h-[calc(100vh-100px)]'>
            <div>
                <div className='flex items-center justify-center '>
                    <h2 className='text-9xl font-bold text-red-600 '>404</h2>
                    <p className='text-3xl font-bold text-black'>ERROR</p>
                </div>
                <div className='flex items-center justify-center'>
                    <h2 className='text-9xl font-bold text-black'>OH <span>NO!</span></h2>
                    <p className='text-3xl font-medium text-red-600'>But that's okay!</p>
                </div>
                <div>
                    <p className='text-lg font-medium text-black mt-7'>Even cool people lose their way online at some point, and today is your point. Don't worry, you'll find your way back.</p>
                </div>
                <div className='flex justify-center mt-7'>
                    <button onClick={() => navigate('/')} className='bg-red-600 py-2 px-6 text-white font-medium text-lg rounded'>Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;