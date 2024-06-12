import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContex } from '../../providers/AuthProviders';

const Login = () => {
    const {googleLogin,logIn,name} = useContext(AuthContex)

    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'));
        //login

        logIn(email, password)
            .then(result => {
                
                console.log(result);
                navigate('/')
                
                
            })
            .catch(error => {
                console.log(error);
                
            })

    



    }


























    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <div className=''>
                <h2 className="text-3xl text-center mt-10">Account <span className='font-bold'>Login</span></h2>
                <p className='text-center mt-1'>Login to our website</p>

                <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/3 mx-auto'>

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
                            
                        </center>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>
                <p className='text-center mt-3'>Don't have an account?  <Link className='text-blue-500' to='/register'>Register now</Link></p>

                <div className='text-center mt-2'>
                    <p>Or</p>
                     <button onClick={handleGoogleLogin} className='btn btn-outline w-1/3 mt-3'>
                <FaGoogle></FaGoogle>
                Login With Google
            </button>
            <br />
            <button className='btn btn-outline w-1/3 mt-2'>
                <FaGithub></FaGithub>
                Login With Github
            </button>
                </div>
            </div>
        </div>
    );
};

export default Login;