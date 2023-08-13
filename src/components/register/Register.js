import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { VarContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading';
import Navber from '../NavigationBar/Navber';
import Swal from 'sweetalert2';

const Register = () => {
    /* useForm  */
    const { register, handleSubmit, formState: { errors }, } = useForm();
    /* firebase access */
    const { registerWithEmailAndPass, updateUser, loading } = useContext(VarContext);
    /* handle  */
    const [signUpError, setSignUpError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    //createdUserEmail will use for use Token hooks

    const [imgLink, setImgLink] = useState('');
    const imgHostKey = process.env.REACT_APP_ImgBB_API_KEY;
    /* THERE REACT_APP_ IS IMPORTANT , if u reWrite the re start the app*/

    //toggle
    const [instruction, setInstruction] = useState(false);
    const toggleContent = () => {
        setInstruction(!instruction);
        setNoKnowledge(false)
    }

    const [noKnowledge, setNoKnowledge] = useState(false);
    const toggleContentNoKnowledge = () => {
        setNoKnowledge(!noKnowledge)
        setInstruction(false)
    }


    const go = useNavigate();
    const handleSignUp = data => {


        /* Imgbb integration */
        const image = data.myImage[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log('form data after append in imgbb integration', formData); //out put just a Object
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        console.log('url with imgBB api key', url); //get successfully
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                console.log('imgData', imgData);
                console.log('form data', data);
                if (imgData.success === true) {
                    setImgLink(imgData.data.display_url);
                    console.log('triger img link in Register after imgData', imgLink); //not get
                    /* Firebase integration */

                    registerWithEmailAndPass(data.email, data.password)
                        .then(res => {
                            console.log('res after integrate registerWithEmailAndPass', res);
                            const userInfo = {
                                displayName: data.name,
                                // photoURL: `${imgLink}`,
                                photoURL: imgLink

                            }

                            updateUser(userInfo)
                                .then(() => {
                                    const newStudent = {
                                        name: data.name,
                                        email: data.email,
                                        img: imgLink,
                                        classDetail: data.classDetail,
                                        subject: data.subject,
                                        institution: data.institution,
                                        paid: false


                                    }
                                    console.log('userInfo inside updateUser firebase', userInfo);
                                    saveUser(newStudent);
                                    go('/login')

                                })
                                .catch((err) => console.log(err));
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Congratulation Your Account Created Successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                        .catch(error => {
                            // console.log(error)
                            setSignUpError("কিছু একটা মিসিং করেছ");
                        });

                }

            })



    }
    const saveUser = user => {
        // axios.post('http://localhost:5000/student', user)
        axios.post('https://phyict-server-almubin78.vercel.app/student', user)
            .then(data => {
                // setCreatedUserEmail(data.email);
            })
    }
    //see bellow[after export this page] for simple fetch


    if (loading) {
        return <Loading />
    }
    const handleMoreInstructionMail = () => {
        return (
            <div className='border rounded-lg p-3 mt-2'>
                <p className=''>সমস্যা নাই। tomarName11@gmail.com এভাবে ইচ্চা মত মেইল বানিয়ে (সেই মেইলে অবশ্যই @ চিহ্ন এবং শেষে যাতে .com থাকে) ইচ্ছেমত পাসওয়ার্ড দিয়ে বাকি তথ্যগুলো ফিলআপ করে (I agree to the <span className='text-warning'>terms and conditions </span>) লেখাটির বামপাশে টিক চিহ্ন দিয়ে (টিক চিহ্ন না দিলে রেজিষ্টারই করতে পারবেনা) <span>SIGN UP</span> বাটনে ক্লিক কর।</p>

                <p className='text-warning'>Note that: মেইল এবং পাসওয়ার্ড মনে রাখতে হবে। প্রয়োজনে লিখে রাখ।</p>
            </div>
        )
    }
    const handleMoreInstruction = () => {

        return (
            <div className='border rounded-lg p-3 mt-2'>
                <p className=''>তোমার যদি gmail/yahoo এর সাথে পরিচয়  থাকে আর একাউন্ট থাকে তাহলে সেই মেইল , ইচ্চা মত পাসওয়ার্ড দিয়ে বাকি তথ্যগুলো ফিলআপ করে (I agree to the <span className='text-warning'>terms and conditions </span>) লেখাটির বামপাশে টিক চিহ্ন দিয়ে (টিক চিহ্ন না দিলে রেজিষ্টারই করতে পারবেনা) <span className='border p-1 rounded'>SIGN UP</span> বাটনে ক্লিক কর।</p>
                <p className='text-warning'>Note that: মেইল এবং পাসওয়ার্ড মনে রাখতে হবে। প্রয়োজনে লিখে রাখ।</p>


            </div>
        )
    }

    //this is main return
    return (
        <>
            {/* <Link to='/' className='btn'>Home Page</Link> */}
            <Navber />
            <div className="flex">
                <div className="container mx-auto py-8">
                    {/* Other content */}
                    <button
                        onClick={toggleContent}
                        className={`btn `}
                    >
                        {instruction ? 'Hide' : 'নির্দেশনা দেখ'}
                    </button>
                    {instruction && handleMoreInstruction()}
                    {/* Other content */}

                </div>
                <div className="container mx-auto py-8">
                    {/* Other content */}
                    <button
                        onClick={toggleContentNoKnowledge}
                        className={`btn `}
                    >
                        {noKnowledge ? 'Hide' : 'আমার মেইল সম্পর্কে ধারণা নেই।'}
                    </button>
                    {
                        noKnowledge &&
                        handleMoreInstructionMail()
                    }

                </div>
            </div>
            <div className='h-[800px] flex justify-center items-center mt-5'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                // required: "Name is Required"
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
                            <label className="label"> <span className="label-text">Choose Your Level</span></label>
                            <select {...register('classDetail')} className="input input-bordered w-full max-w-xs">
                                <option value="Nine">Class Nine</option>
                                <option value="Ten">Class Ten</option>
                                <option value="HSC 1st">Inter First Year</option>
                                <option value="HSC 2nd">Inter Second Year</option>
                                {/* <option value="Guardian">Guardian</option> */}
                            </select>
                            {errors.classDetail && <p className='text-red-500'>{errors.classDetail}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Choose Your Subject</span></label>
                            <select {...register('subject')} className="input input-bordered w-full max-w-xs">
                                <option value="Physics">Physics</option>
                                <option value="ICT">ICT (HSC only)</option>
                            </select>
                            {errors.subject && <p className='text-red-500'>{errors.subject}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">School/Collage Name</span></label>
                            <input type="text" {...register("institution", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.institution && <p className='text-red-500'>{errors.institution.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Upload Your Image</span></label>
                            <input type="file" {...register('myImage')} />
                            {errors.myImage && <p className='text-red-500'>{errors.myImage}</p>}
                        </div>

                        <div className="form-control mt-4">
                            <label className="cursor-pointer label">
                                <input
                                    type="checkbox"
                                    {...register("terms", {
                                        required: 'You must agree to the terms and conditions',
                                    })}
                                    className="checkbox mx-0"
                                    checked={termsAgreed}
                                    onChange={(e) => setTermsAgreed(e.target.checked)}
                                />
                                <span className="">I agree to the <Link to='/terms-condition' className='underline text-yellow-600'>terms and conditions</Link></span>
                            </label>
                            {errors.terms && <p className='text-red-500'>{errors.terms.message}</p>}
                        </div>
                        <input
                            className={`btn btn-accent w-full mt-4 ${termsAgreed ? '' : 'disabled:opacity-100 cursor-not-allowed'}`}
                            value="Sign Up"
                            type="submit"
                            disabled={!termsAgreed}
                        />
                        {/* Conditionally render the "Sign Up" button */}
                        {/* {termsAgreed && (
                            <input
                                className='btn btn-accent w-full mt-4'
                                value="Sign Up"
                                type="submit"
                            />
                        )} */}



                    </form>

                    <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>

                    {/* <button disabled className='btn btn-outline w-full'>CONTINUE WITH GOOGLE (off)</button> */}
                    {/* <SocialLogin /> */}
                </div>
            </div>
        </>

    );
};

export default Register;
