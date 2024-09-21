import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast, { Toaster } from 'react-hot-toast';

const RecipesCard = ({ recipe }) => {
    const { recipe_name, rating, cooking_method, ingredients } = recipe;
    const [isButtonDisable, setButtonDisable] = useState(false)

    const notify = () => {
        toast('This recipe added to your favorite list');
        setButtonDisable(true);
    };

    return (
        <div className="card bg-zinc-600 text-primary-content w-96 rounded-md">
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl text-red-500">{recipe_name}</h2>
                <div className='mt-2'>
                    <h5 className='text-lg font-medium mb-1'>Ingredients:</h5>
                    <div className='flex gap-3'>
                        <p className=''>[ {ingredients[0]},</p>
                        <p className=''>{ingredients[1]},</p>
                        <p className=''>{ingredients[2]} ]</p>
                    </div>
                </div>
                <div className=''>
                    <h5 className='text-lg font-medium mb-1 mt-3'>Cooking Method:</h5>
                    <p>{cooking_method}</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <div className='flex gap-2'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                        <p>{rating}</p>
                    </div>
                    <div>
                        <button
                            onClick={notify}
                            className="py-3 px-6  bg-red-600 rounded text-white font-medium text-base"
                            disabled={isButtonDisable}
                        >Favorite</button>
                        <Toaster toastOptions={{
                            className: '',
                            style: {
                                backgroundColor: 'red',
                                color: "white",
                                fontWeight: 500
                            },
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;