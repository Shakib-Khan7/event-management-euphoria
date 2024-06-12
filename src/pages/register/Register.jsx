/* eslint-disable no-constant-condition */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { AuthContex } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const Register = () => {
    const [emailError, setEmailError] = useState()
    const [passwordError, setpasswordError] = useState()

    const { createUser } = useContext(AuthContex)

    const navigate = useNavigate()









    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        setEmailError('');
        setpasswordError('')

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setpasswordError('Password must contain two uppercase letters')
            return;
        }


        console.log(name, email, password, photo);

        //create user

        createUser(email, password, name)
            .then(result => {
                toast.success('User Created & logged in')
                navigate('/')
                



                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setEmailError('Email already in use')
                }
                else {
                    setpasswordError('Password must be longer than 6 characters')
                }


            })

    }










    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-4'>
                <h2 className="text-3xl text-center font-poppins">Please <span className='font-bold'>Sign Up</span></h2>

                <form onSubmit={handleRegister} className='md:w-3/4 lg:w-1/3 mx-auto'>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Url" className="input input-bordered" name='photo' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <center>
                        {emailError ? <p className='text-red-500'>{emailError}</p> : <p className='text-red-500'>{passwordError}</p>}
                        </center>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>

                </form>
                <p className='text-center mt-3'>Already have an account?  <Link className='text-blue-500' to='/login'>Login now</Link></p>
            </div>
        </div>
    );
};

export default Register;