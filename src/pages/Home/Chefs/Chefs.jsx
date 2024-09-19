import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, []);

    return (
        <div className='my-10 container mx-auto'>
            <h3 className='text-4xl font-bold text-center text-red-600'>Meet with Our Chef's</h3>
            <div className='grid grid-cols-3 gap-y-6 mt-8 '>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;