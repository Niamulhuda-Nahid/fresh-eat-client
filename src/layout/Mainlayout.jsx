import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/Header/NavigationBar';
import Footer from '../pages/shared/Footer/Footer';

const Mainlayout = () => {
    return (
        <div className=''>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;