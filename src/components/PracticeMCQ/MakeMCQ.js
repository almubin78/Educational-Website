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
            questionNo: parseInt(mcqQuestions.length) + 1,
            subject: "physics",
            level: mcq.level,
            questionType: mcq.questionType,
            chapter: mcq.chapter,
            type: 'free',
            options: [mcq.firstOption, mcq.secondOption, mcq.thirdOption, mcq.fourthOption],
            correctAnswer: mcq.correctAnswer,
            explanation:mcq.explanation

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

    const [classDetail, setClassDetail] = useState('');
    const handleSubjectChange = e => {
        setClassDetail(e.target.value)
    }
    return (
        <div className='h-[800px] flex justify-center items-center mt-3'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Make MCQ</h2>
                <form onSubmit={handleSubmit(handleMCQ)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Question</span></label>
                        <textarea rows="40" type="text" {...register("question", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.question && <p className='text-red-500'>{errors.question.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Explanation</span></label>
                        <textarea rows="40" type="text" {...register("explanation", {
                            // required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.explanation && <p className='text-red-500'>{errors.explanation.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Level</span></label>
                        <select
                            {...register('level')}
                            className="input input-bordered w-full max-w-xs"
                            onChange={handleSubjectChange}>
                            <option value="SSC-physics">Physics SSC</option>
                            <option value="SSC-math">Math SSC</option>
                            <option value="HSC-physics-first">HSC Physics First</option>
                            <option value="HSC-physics-second">HSC Physics Second</option>
                            {/* <option value="Guardian">Guardian</option> */}
                        </select>
                        {errors.level && <p className='text-red-500'>{errors.level}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Question Type</span></label>

                        <select {...register('questionType')} className="input input-bordered w-full max-w-xs">
                            <option value="নৈবত্তিক">নৈবত্তিক</option>
                            <option value="জ্ঞানমুলক">জ্ঞানমুলক</option>
                            <option value="অনুধাবন মুলক">অনুধাবন মুলক</option>
                            <option value="সৃজনশীল">সৃজনশীল</option>
                            {/* <option value="Guardian">Guardian</option> */}
                        </select>
                        {errors.questionType && <p className='text-red-500'>{errors.questionType}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Chapter</span></label>
                        <select {...register('chapter')} className="input input-bordered w-full max-w-xs">
                            {
                                classDetail.includes('HSC-physics') && <>
                                    <option value="vector">Vector</option>
                                    <option value="Motion">Motion</option>
                                </>
                            }
                            {classDetail.includes('SSC-physics') &&
                                <>
                                    <option value="গতি">গতি</option>
                                    <option value="ভৌত রাশি ও পরিমাপ">ভৌত রাশি ও পরিমাপ</option>
                                    <option value="বল">বল</option>
                                    <option value="কাজ, ক্ষমতা ও শক্তি">কাজ, ক্ষমতা ও শক্তি</option>
                                    <option value="পদার্থে অবস্থা ও চাপ">পদার্থে অবস্থা ও চাপ</option>
                                    <option value="বস্তুর উপর তাপের প্রভাব">বস্তুর উপর তাপের প্রভাব</option>
                                    <option value="তরঙ্গ ও শব্দ">তরঙ্গ ও শব্দ</option>
                                    <option value="আলোর প্রতিফলন">আলোর প্রতিফলন</option>
                                    <option value="আলোর প্রতিসরণ">আলোর প্রতিসরণ</option>
                                    <option value="স্থির বিদ্যুৎ">স্থির বিদ্যুৎ</option>
                                    <option value="চল বিদ্যুৎ">চল বিদ্যুৎ</option>
                                    <option value="বিদ্যুতের চৌম্বক ক্রিয়া">বিদ্যুতের চৌম্বক ক্রিয়া</option>
                                    <option value="আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স">আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স</option>
                                    <option value="জীবন বাঁচাতে পদার্থবিজ্ঞান">জীবন বাঁচাতে পদার্থবিজ্ঞান</option>
                                </>
                            }
                            {classDetail.includes('SSC-math') &&
                                <>
                                    <option value="one">Real Number</option>
                                    <option value="two">Set and Function</option>
                                    <option value="three">The quasition</option>
                                </>
                            }


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
                        <label className="label input-group input-group-md"> <span className="label-text">Option Four</span>

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