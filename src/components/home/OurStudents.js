import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Student from './Student';

import Marquee from 'react-fast-marquee';

const OurStudents = () => {

    const [registeredStudents, setRegisteredStudents] = useState([])

    useEffect(() => {
        // mongodb
        // fetch('http://localhost:5000/students')
        // compass
        // fetch('http://localhost:8000/students')
        //Live site
        fetch('https://phyict-server-almubin78.vercel.app/students')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setRegisteredStudents(data)
            })
    }, [])
    return (
        <>
            <div className='container mx-auto w-full my-3 hidden md:block'>
                <h3 className='text-center divider text-xl mb-5'>Registered Students: {registeredStudents.length}</h3>
                <Marquee speed={200} direction='right' className='my-5'>
                    {/* Live students */}
                    <div className='flex gap-5'>
                        {registeredStudents.map(student => <Student
                            key={student._id}
                            student={student}
                        ></Student>)}

                    </div>
                </Marquee>
                
            </div>
            <div className='md:hidden'>
                <h3 className="divider font-bold text-xl">Registered Students: {registeredStudents.length}</h3>
                <Marquee speed={85} direction='right' className='my-5'>
                    {/* Live students */}
                    <div className='flex gap-5'>
                        {registeredStudents.map(student => <Student
                            key={student._id}
                            student={student}
                        ></Student>)}

                    </div>
                </Marquee>
            </div>

        </>
    );
};

export default OurStudents;