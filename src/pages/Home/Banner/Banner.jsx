import React from 'react';
import chef from '../../../assets/chef2.png'
import banner from '../../../assets/banner.webp'
import food from '../../../assets/food.png'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div style={{ backgroundImage: "url(https://i.ibb.co.com/QnP2D3x/fdsfd.webp)" }} className='bg-cover bg-no-repeat bg-center '>
            <div className=' container mx-auto flex items-center py-16 '>
                <div className='w-1/2 '>
                    <img className=' ' src={food} alt="" />
                </div>
                <div className='w-1/2 '>
                    <h4 className='text-5xl font-bold mb-4 text-red-600'>WELCOME  TO FRESHEAT</h4>
                    <p className='text-lg font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto incidunt nam non repellat illum earum dolorem maxime distinctio itaque. Delectus molestiae molestias eaque nostrum ipsam repellat recusandae, ab perferendis.</p>
                    <button className='bg-red-700 py-3 px-5 text-white font-medium text-xl flex items-center gap-2 mt-6 rounded'>Order Now <FaArrowRight className=''/></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

