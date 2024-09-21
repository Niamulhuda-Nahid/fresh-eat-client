import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../provider/AuthProvider';
import ActiveLink from './ActiveLink/ActiveLink';

const NavigationBar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="navbar bg-gray-800 text-white sticky top-0 z-30">
            <div className="flex-1">
                <Link className="h-full w-28 ">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <div className='mr-20'>
                    <nav className=''>
                        <ActiveLink to='/' >Home</ActiveLink>
                        <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    </nav>

                </div>
                {user ?  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user.displayName}>
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-5 w-52 p-2 shadow">
                        <li><a onClick={handleLogOut} className='text-white'>Logout</a></li>
                    </ul>
                </div> :
                    <Link to='/login'><button className=' py-2 px-4 rounded-sm font-medium bg-red-700'>Login</button></Link>}
            </div>
        </div>
    );
};

export default NavigationBar;