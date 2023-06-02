import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { VarContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logInError, setLogInError] = useState('');
    const {loginWithEmailAndPass,user,loding}= useContext(VarContext)
    const navigate = useNavigate();
    const handleLogin = data =>{
        loginWithEmailAndPass(data.email,data.password)
        .then(res=>{
            console.log(res.user);
            navigate('/')
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Log In</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            // pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must have one uppercase and a number' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Log In" type="submit" />
                    {logInError && <p className='text-red-600'>{logInError}</p>}

                </form>

                <p>Have Not account yet? <Link className='text-secondary' to="/register">Please Register</Link></p>
                <div className="divider">OR</div>
                
                <button disabled className='btn btn-outline w-full'>CONTINUE WITH GOOGLE (currently disabled)</button>

            </div>
        </div>
    );
};

export default Login;