import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const MakeMCQ = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [mcqQuestions, setMcqQuestions] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/sscMcq')
        fetch('https://phyict-server-almubin78.vercel.app/sscMcq')
            .then(res => res.json())
            .then(data => setMcqQuestions(data))
    }, [])
    const handleMCQ = (mcq) => {
        const newMCQ = {
            question: mcq.question,
            level: "SSC",
            questionNo: mcqQuestions.length + 1,
            subject: "physics",
            level: mcq.level,
            questionType: mcq.questionType,
            chapter: mcq.chapter,
            type: 'free',
            options: [mcq.firstOption, mcq.secondOption, mcq.thirdOption, mcq.fourthOption],
            correctAnswer: mcq.correctAnswer

        }

        // axios.post('http://localhost:5000/sscMcq', newMCQ)
        axios.post('https://phyict-server-almubin78.vercel.app/sscMcq', newMCQ)
            .then(data => {
                setMcqQuestions(data);
                reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'MCQ Added Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Make MCQ</h2>
                <form onSubmit={handleSubmit(handleMCQ)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Question</span></label>
                        <textarea rows="40" type="text" {...register("question", {
                            // required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.question && <p className='text-red-500'>{errors.question.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Level</span></label>
                        <select {...register('level')} className="input input-bordered w-full max-w-xs">
                            <option value="Nine">SSC</option>
                            <option value="Ten">HSC</option>
                            {/* <option value="Guardian">Guardian</option> */}
                        </select>
                        {errors.level && <p className='text-red-500'>{errors.level}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Question Type</span></label>
                        <select {...register('questionType')} className="input input-bordered w-full max-w-xs">
                            <option value="MCQ">MCQ</option>
                            <option value="knowledge">knowledge</option>
                            <option value="felling">felling</option>
                            {/* <option value="Guardian">Guardian</option> */}
                        </select>
                        {errors.questionType && <p className='text-red-500'>{errors.questionType}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Chapter</span></label>
                        <select {...register('chapter')} className="input input-bordered w-full max-w-xs">
                            <option value="one">ভৌত রাশি ও পরিমাপ</option>
                            <option value="two">গতি</option>
                            <option value="three">বল</option>
                            <option value="four">কাজ, ক্ষমতা ও শক্তি</option>
                            <option value="five">পদার্থে অবস্থা ও চাপ</option>
                            {/* <option value="Guardian">Guardian</option> */}
                        </select>
                        {errors.chapter && <p className='text-red-500'>{errors.chapter}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label input-group input-group-md"> <span className="label-text">Option One</span>

                            <input type="text" {...register("firstOption", {
                                // required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="label input-group input-group-md"> <span className="label-text">Option Two</span>

                            <input type="text" {...register("secondOption", {
                            })} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="label input-group input-group-md"> <span className="label-text">Option Three</span>

                            <input type="text" {...register("thirdOption", {
                            })} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="label input-group input-group-md"> <span className="label-text">Option Three</span>

                            <input type="text" {...register("fourthOption", {
                            })} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label input-group input-group-md"> <span className="">Answer</span>
                            <input type="text" {...register("correctAnswer", {
                            })} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Make a New Mcq" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default MakeMCQ;