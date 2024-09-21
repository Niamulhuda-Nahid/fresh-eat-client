import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';
import RecipesCard from './RecipesCard/RecipesCard';
import useTitle from '../../hooks/TitleHook/useTitle';

const ChefRecipes = () => {
    const chefs = useLoaderData();
    const { id, name, img_url, likes, number_of_recipes, years_of_experience, description, recipes } = chefs;
    useTitle('Chef')
    return (
        <div className='container mx-auto'>
            <div className=' container mx-auto flex items-center py-16 '>
                <div className='w-1/2 '>
                    <img className='rounded' src={img_url} alt="" />
                </div>
                <div className='w-1/2 '>
                    <h4 className='text-5xl font-bold mb-4 text-red-600'>{name}</h4>
                    <p className='text-lg font-medium'>{description}</p>
                    <div className='flex my-5 gap-6'>
                        <p className='text-base font-medium'>Experience: {years_of_experience} year's</p>
                        <p className='text-base font-medium'>Recipes: {number_of_recipes} item's</p>
                    </div>
                    <p className='flex gap-1 items-center text-sm font-bold'><BiSolidLike className='text-2xl text-red-600' /> {likes}</p>
                </div>
            </div>
            <div className='bg-red-50 py-10 px-5 rounded-md'>
                <h4 className='text-5xl font-bold text-red-600 text-center mb-10'>Recipes</h4>
                <div className='grid grid-cols-3 justify-items-center gap-4 '>
                    {
                        recipes.map((recipe, index) => <RecipesCard
                            key={index}
                            recipe={recipe}
                        ></RecipesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;