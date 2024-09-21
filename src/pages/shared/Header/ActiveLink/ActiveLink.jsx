import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-red-600 mr-7 font-bold *: "
                    : "mr-7 text-white"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;