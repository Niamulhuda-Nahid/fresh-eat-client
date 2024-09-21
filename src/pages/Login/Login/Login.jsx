import React, { useContext } from 'react';
import NavigationBar from '../../shared/Header/NavigationBar';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/TitleHook/useTitle';

const Login = () => {

    const { loginUser, resetPassByEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useTitle('Login')

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleResetEmail = () => {
        const emailElement = document.getElementById('email')
        const email = emailElement.value;

        resetPassByEmail(email)
            .then(() => {
                console.log('sent a email, please check')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className=''>
            <NavigationBar></NavigationBar>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-5">

                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-2xl text-center font-bold">Please Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input id='email' type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter yeur password" className="input input-bordered" required />
                        <label className="label">
                            <a onClick={handleResetEmail} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="py-2 text-lg bg-red-700 rounded-md text-white font-semibold">Login</button>
                        <small className='text-center mt-4'>Don't have an account? <Link to='/register' className='text-red-600 font-bold'>Please register</Link></small>
                    </div>
                </form>

            </div>
            <div className='flex flex-col w-3/12 gap-5 my-4 mx-auto'>
                <button className="py-3 px-4 rounded-md font-medium bg-red-700 text-white flex items-center gap-4 justify-center"><FaGoogle />Login with Google</button>
                <button className="py-3 px-4 rounded-md font-medium bg-red-700 text-white flex items-center gap-4 justify-center"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default Login;