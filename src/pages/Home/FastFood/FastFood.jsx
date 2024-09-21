import React, { useEffect, useState } from 'react';
import FastFoodCard from './FastFoodCard/FastFoodCard';

const FastFood = () => {

    const [fastFoods, setFastFoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/fast-food')
        .then(res=> res.json())
        .then(data=> setFastFoods(data));
    }, [])
    return (
        <div className='my-10 container mx-auto'>
            <h3 className='text-4xl font-bold text-center text-red-600 mb-7'>Fast Food Item</h3>
            <div className='grid grid-cols-3 gap-5'>
                {
                    fastFoods.map(fastFood=> <FastFoodCard
                        key={fastFood.id}
                        fastFood={fastFood}
                    ></FastFoodCard>)
                }
            </div>
        </div>
    );
};

export default FastFood;


