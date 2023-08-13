import React from 'react';

const Student = ({ student }) => {

    return (
        <>
            
            <div className="mx-2 card card-compact w-96 bg-base-200 shadow-xl">
                    <figure className='p-5'>
                        {
                            student?.img ?
                                <img className='rounded' style={{ height: "300px",width:"80%" }} src={student.img} alt="student" />
                                :
                                <img className='rounded' style={{ height: "300px" }} src='https://png.pngtree.com/element_pic/00/16/07/14578669fa9a2db.jpg' alt="student" />
                        }
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='text-green-700'>{student.name}</span></h2>
                        {
                            student?.institution ?
                                <p>Institution: <span className='text-green-500'>{student.institution}</span></p>
                                :
                                <p>Institution: Nakai Hat Collage</p>
                        }
                        <p>Class: {student.classDetail}</p>
                        {/* <p>Mail: {student.email}</p> */}
                        <p>Student Of: {student.subject}</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
        </>

    );
};

export default Student;