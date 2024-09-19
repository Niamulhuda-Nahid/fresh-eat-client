import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../shared/Header/NavigationBar';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    
    const { createUser, updateUserProfile, sedverificationEmail } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleCreateUser = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log(name, email, password, photo);

        if (password.length < 8) {
            setError('Minimum eight characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(name, photo)
                    .then(() => {

                    })
                    .catch(error => {

                    })

                sedverificationEmail()
                    .then(() => {
                        console.log('check email')
                    })
                    .catch(error=>{
                        
                    })
                setError('')

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className=''>
            <NavigationBar></NavigationBar>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-5">

                <form onSubmit={handleCreateUser} className="card-body">
                    <h1 className="text-2xl text-center font-bold">Please Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter yeur password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter yeur photo-url" className="input input-bordered" required />
                    </div>
                    <p className='text-red-600 font-normal text-sm'>{error}</p>
                    <div className="form-control mt-6">
                        <button className="py-2 text-lg bg-red-700 rounded-md text-white font-semibold">Register</button>
                        <small className='text-center mt-4'>Already have an account? <Link to='/login' className='text-red-600 font-bold'>Please login</Link></small>
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

export default Register;