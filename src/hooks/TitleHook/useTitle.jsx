import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title = (`${title} - Fresh Eat`)
    }, [title])
};

export default useTitle;