import { getAuth } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import app from '../../firebaseConfig/firebase.config';
import {useSendPasswordResetEmail} from 'react-firebase-hooks/auth'
const ResetPass = () => {
    const auth =getAuth(app)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const forgotPassHandle = async (data) => {
        const email = data.email;
        console.log(email, 'email from form data');
        if (email) {
            await sendPasswordResetEmail(email);
        }
    };
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    return (
        <div className='flex justify-center align-middle'>
            <form onSubmit={handleSubmit(forgotPassHandle)}>
                <div className="divider">Reset Your Password</div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="input input-bordered w-full max-w-xs"
                        placeholder='Enter Your Registered Email'
                    />
                    {errors.email && <p className='text-red-500'>Email is required.</p>}
                </div>
                <button className='btn btn-primary my-5' type="submit">Reset My Password</button>
            </form>
        </div>
    );
};

export default ResetPass;