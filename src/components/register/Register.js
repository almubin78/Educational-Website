import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { VarContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {user, registerWithEmailAndPass, updateUser, loading } = useContext(VarContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [imgLink,setImgLink] = useState('');
    const imgHostKey = process.env.REACT_APP_ImgBB_API_KEY;
    /* THERE REACT_APP_ IS IMPORTANT , if u reWrite the re start the app*/

    const go = useNavigate();
    const handleSignUp = data => {
        console.log(data);
        // const classDetails = data.classDetail;

        /* Imgbb integration */
        const image = data.myImage[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log('form data after append in imgbb integration', formData);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        console.log('url with imgBB api key', url);
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                
                console.log('imgData', imgData);
                if (imgData.success) {
                    // console.log('imgData.data.url', imgData.data.url);

                    /* Firebase integration */

                    registerWithEmailAndPass(data.email, data.password)
                        .then(res => {
                            console.log(user,'user from regi');
                            
                            // const user = res.user;
                            // console.log('user from firebase', user);
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgLink
                                
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    // console.log('userInfo inside updateUser firebase',userInfo);
                                    saveUser(data.name, data.email);
                                    setImgLink(imgData.data.url);
                                    
                                   

                                })
                                .catch((err) => console.log(err));
                        })
                        .catch(error => {
                            // console.log(error)
                            setSignUpError(error.message);
                        });

                }
            })



    }
    const saveUser = (name, email) => {
        const user = { name, email,imgLink };
        // console.log('user from saveUser Functions', user);
        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('this data is from fetch then after post method', data);
                setCreatedUserEmail(email);
            })
    }
    // if(loading){
    //     go('/');
    // }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password (minimum six)</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            // pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must have one uppercase and a number' }
                            // pattern: { value: /(?=.*[0-9])/, message: 'Password must have  a number' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Choose Your Class</span></label>
                        <select {...register('classDetail')} className="input input-bordered w-full max-w-xs">
                            <option value="JustBrowsing">Just Browsing</option>
                            <option value="nine">Class Nine</option>
                            <option value="ten">Class Ten</option>
                            <option value="interFirst">Inter First Year</option>
                            <option value="interSecond">Inter Second Year</option>
                        </select>
                        {errors.classDetail && <p className='text-red-500'>{errors.classDetail}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Choose Your Subject</span></label>
                        <select {...register('subject')} className="input input-bordered w-full max-w-xs">
                            <option value="Physics">Physics</option>
                            <option disabled value="ICT">ICT (currently off)</option>
                        </select>
                        {errors.subject && <p className='text-red-500'>{errors.subject}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Upload Your Image</span></label>
                        <input type="file" {...register('myImage')} />
                        {errors.myImage && <p className='text-red-500'>{errors.myImage}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>

                <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>

                <button disabled className='btn btn-outline w-full'>CONTINUE WITH GOOGLE (off)</button>

            </div>
        </div>
    );
};

export default Register;