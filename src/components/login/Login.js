import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { VarContext } from '../../context/AuthProvider';
import Navber from '../NavigationBar/Navber';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginWithEmailAndPass } = useContext(VarContext)
    const [loginError, setLoginError] = useState('');
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log('trucking from from Login at location.state?.from?.pathname',from);

    const handleToggle = () => {
        setOpen(!open)
    }
    const hadleShowInstruction = () => {
        return (<>
            <div className="px-5">
                <p>তোমার রেজিস্টার করা ইমেইল আর পাসওয়ার্ড লিখে <span className=" text-green-300 p-2">LOG IN</span> button এ click কর।</p>
                <br />
                <p>রেজিষ্টার করনি? <Link className='text-secondary' to="/register">Please Register</Link> 👈 এখানে ক্লিক কর।</p>
            </div>
        </>)
    }
    const handleLogin = data => {
        console.log('data from handleLogin form', data);
        loginWithEmailAndPass(data.email, data.password)
            .then(res => {
                console.log('user from Login (res.user) after loginWithEmailAndPass', res.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                // Check if Firebase error has a message
                if (err.message) {
                    setLoginError("ভুল হচ্ছে,তোমার Email/Password ভাল ভাবে চেক কর।");
                }
                /* 
                or I can use following code for firebase error without : Firebase/errr......... 

                 if (err.message) {
                    const errorCode = err.message.split(')')[1].trim();
                    setLoginError(`(${errorCode})`);
                } 
                else {
                    setLoginError('An error occurred while logging in');
                 }
                
                */
            });
    }
    return (
        <>
            <Navber></Navber>

            <div className="">
                {/* Other content */}
                <button
                    onClick={handleToggle}
                    className={`btn `}
                >
                    {open ? 'HIDE' : 'নির্দেশনা দেখ'}
                </button>
                {open && hadleShowInstruction()}

            </div>

            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl divider text-center'>Login Please</h2>
                    {loginError && <p className='text-red-300 border rounded-2xl py-1 text-center'>{loginError}</p>}
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="input input-bordered w-full max-w-xs"
                                placeholder='Enter Your Registered Email'
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters long" },
                                    // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    // pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must have one uppercase and a number' }
                                })}
                                className="input input-bordered w-full max-w-xs"
                                placeholder='Enter Your Password'

                            />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>

                        <input className='btn btn-accent w-full mt-4' value="Log In" type="submit" />

                    </form>




                </div>
            </div>
        </>
    );
};

export default Login;