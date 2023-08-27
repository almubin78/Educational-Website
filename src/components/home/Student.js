import React from 'react';

const Student = ({ student }) => {

    return (
        <>

            <div className="mx-2 card card-compact w-96 bg-base-200 shadow-xl">
                <div className="flex justify-around my-5 " onContextMenu={(e) => e.preventDefault()}>
                    {
                        student?.paid === true ? <>
                            {/* If Paid */}
                            {
                                student?.img ?
                                    <>
                                        {/*paid and img available */}
                                        <div className="avatar online ">
                                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                                <img style={{ pointerEvents: 'none' }} src={student.img} alt='Not Found' className="object-cover w-full h-full opacity-50" />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        {/*Paid and img not available so check gender*/}
                                        {
                                            student?.gender === 'male' && <>
                                                {/* Gender === male */}
                                                <div className="avatar online">
                                                    <div className="w-24 h-24 rounded-full overflow-hidden">
                                                        <img style={{ pointerEvents: 'none' }} src='https://png.pngtree.com/element_pic/00/16/07/14578669fa9a2db.jpg' alt='Not Found' className="object-cover w-full h-full" />
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {/* gender === female */}
                                        {
                                            student?.gender === 'female' &&
                                            <>
                                                <div className="avatar online">
                                                    <div className="w-24 h-24 rounded-full overflow-hidden">
                                                        <img style={{ pointerEvents: 'none' }} src='https://i.ibb.co/SdwF3F4/desktop-wallpaper-popular-girl-anime-girls-cartoon-2013697-backgrounds-girl-cartoon-pic-thumbnail.jpg' alt='Not Found' className="object-cover w-full h-full" />
                                                    </div>
                                                </div>
                                            </>
                                        }


                                    </>
                            }
                        </> : <>
                            {/*Not Paid and img available */}
                            {
                                student?.img ? <>

                                    <div className="avatar offline">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img src={student.img || 'https://png.pngtree.com/element_pic/00/16/07/14578669fa9a2db.jpg'} style={{ pointerEvents: 'none' }} alt='Not Found' className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </> : <>
                                    {/*Not Paid and img not available and gender check*/}

                                    {
                                        student?.gender === 'male' && <>
                                            {/* Gender === male */}
                                            <div className="avatar offline">
                                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                                    <img style={{ pointerEvents: 'none' }} src='https://png.pngtree.com/element_pic/00/16/07/14578669fa9a2db.jpg' alt='Not Found' className="object-cover w-full h-full" />
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {/* gender === female */}
                                    {
                                        student?.gender === 'female' &&
                                        <>
                                            <div className="avatar offline">
                                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                                    <img style={{ pointerEvents: 'none' }} src='https://i.ibb.co/SdwF3F4/desktop-wallpaper-popular-girl-anime-girls-cartoon-2013697-backgrounds-girl-cartoon-pic-thumbnail.jpg' alt='Not Found' className="object-cover w-full h-full" />
                                                </div>
                                            </div>
                                        </>
                                    }
                                </>
                            }

                        </>
                    }
                    {
                        student?.paid === true ?
                            <h2 className="card-title">
                                <span className='text-green-700 font-mono'>{student.name} <br />
                                    <span className="badge badge-secondary">Paid student</span>  </span>
                            </h2> : <h2 className="card-title">
                                <span className='text-green-700 font-mono'>
                                    {student.name} <br /><span className="badge badge-warning">Non-Paid</span>
                                </span>
                            </h2>
                    }

                </div>
                <div className="card-body">
                    <p><span className='text-green-500'>{student.institution}</span></p>
                    <p>Class: <span className="font-bold">{student.classDetail}</span></p>
                    <p>Student Of: {student.subject}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div >
        </>

    );
};

export default Student;