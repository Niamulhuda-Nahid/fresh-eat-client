import React from 'react';
import { BiSolidLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, img_url, likes, number_of_recipes, years_of_experience } = chef;
    // console.log(name)
    return (
        <div className="card card-compact bg-base-100 w-96 shadow rounded">
            <figure>
                <img
                    src={img_url}
                    alt="Chef Image" />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{name}</h2>
                <div className='flex justify-between'>
                    <p className='text-base font-medium'>Experience: {years_of_experience} year's</p>
                    <p className='text-base font-medium'>Recipes: {number_of_recipes} item's</p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p className='flex gap-1 items-center text-sm font-bold'><BiSolidLike className='text-2xl text-red-600' /> {likes}</p>
                    <Link to={`/recipes/${id}`}>
                        <button className="btn bg-red-600 text-white">View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;