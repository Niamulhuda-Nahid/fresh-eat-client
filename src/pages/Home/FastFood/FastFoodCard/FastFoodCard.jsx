import React from 'react';
import { FaDollarSign } from "react-icons/fa";

const FastFoodCard = ({ fastFood }) => {
    const { name, category, price, calories, photo_url } = fastFood;

    return (
        <div className='flex justify-center items-center flex-col gap-4 bg-stone-100 p-5 rounded-md relative'>
            {/* background jover div */}
            <div className='absolute bg-red-700 inset-0 opacity-0 hover:opacity-85 z-10 rounded-md'>
                <div className='flex justify-center mt-[50%] translate-y-[-50%]'>
                    <button className='bg-black py-2 px-4 rounded text-white'>Buy Now</button>
                </div>
            </div>
            <div className="avatar border-2 border-dashed rounded-full border-red-600 p-2 ">
                <div className="w-60 rounded-full">
                    <img className='' src={photo_url} alt="" />
                </div>
            </div>

            <div className='text-center'>
                <h3 className='font-bold text-3xl text-red-600 mb-3'>{name}</h3>
                <div className='flex items-center justify-center gap-3 font-medium'>
                    <p>Category: <span className=' text-red-600 font-bold text-xl'>{category}</span></p>
                    <p className='flex items-center'>Price: <span className='flex items-center text-red-600 font-bold text-xl'><FaDollarSign />{price}</span></p>
                    <p>Calories: <span className=' text-red-600 font-bold text-xl'>{calories}</span></p>
                </div>
            </div>
        </div>
    );
};

export default FastFoodCard;