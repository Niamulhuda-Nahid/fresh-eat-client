import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <p className='text-7xl font-medium'>L</p>
            <div className='h-10 w-10 border-8 border-dashed rounded-full border-blue-700 mt-5 animate-spin'></div>
            <p className='text-7xl font-medium'>ding...</p>
        </div>
    );
};

export default LoadingPage;