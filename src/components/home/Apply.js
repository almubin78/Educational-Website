import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { VarContext } from '../../context/AuthProvider';

const Apply = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(VarContext)
        /* handle Apply */
        const handleApply = data => {
            console.log(data);
        }
    return (
        <div>
            <h3 className='text-center divider text-xl mt-5'>Enroll Now!! Booking Your Position.</h3>
            <div className=' flex justify-center items-center'>
                <div className='w-96 p-7'>

                    <form onSubmit={handleSubmit(handleApply)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            {
                                user ? <input defaultValue={user.email} type="email" {...register("email", {
                                    required: true
                                })} className="input input-bordered w-full max-w-xs" placeholder='enter your email please' />
                                    :
                                    <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" placeholder='Enter your email please' />
                            }
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            <input type="number" {...register("number", {
                                        required: true
                                    })} className="input input-bordered w-full max-w-xs" placeholder='Enter your Contact Number' />
                            
                            {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Choose Your Level</span></label>
                            <select {...register('classDetail')} className="input input-bordered w-full max-w-xs">
                                <option value="nine">Class Nine</option>
                                <option value="ten">Class Ten</option>
                                <option value="interFirst">Inter First Year</option>
                                <option value="interSecond">Inter Second Year</option>
                            </select>
                            {errors.classDetail && <p className='text-red-500'>{errors.classDetail}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Choose Subject: (Physics For both and ICT only for HSC and In SSC level Math is bonus with Physics)</span></label>
                            <select {...register('subject')} className="input input-bordered w-full max-w-xs">
                                <option value="Physics">Physics</option>
                                <option value="ICT">ICT [HSC only]</option>
                            </select>
                            {errors.subject && <p className='text-red-500'>{errors.subject}</p>}
                        </div>


                        <input className='btn btn-accent w-full mt-4' value="Apply" type="submit" />

                    </form>

                    {/* <Link className='text-secondary' to="/">Back To Home</Link> */}

                </div>
            </div>
        </div>
    );
};

export default Apply;