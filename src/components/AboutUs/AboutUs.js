import React from 'react';
import AboutSubjects from './AboutSubjects';
import Navber from '../NavigationBar/Navber';
import useDynamicTitle from '../hooks/useDyanmicTitle';

const AboutUs = () => {
    useDynamicTitle('About')
    return (
        <>
            {/* About Me section start */}
            {/* <Navber /> */}
            {/* <Link to='/' className='btn'>Home Page</Link> */}
            <div className='container mx-auto mt-2 mb-2'>
                <div class="bg-pink-200 rounded-lg shadow-lg p-6 container ">
                    <h2 class="text-2xl font-bold mb-4">About Me</h2>
                    <p class="text-gray-600 mb-4">
                        At my teaching institution, I am dedicated to providing high-quality education in various subjects. I specialize in Physics and ICT offering comprehensive courses designed to help students excel in these fields.
                    </p>
                    <p class="text-gray-600 mb-4">
                        I am committed to nurturing a positive learning environment where students can thrive. I believe in the power of education to transform lives, and I strive to instill a love for learning in all my students.
                    </p>
                    <div className="preSection snap-x text-white-200 mb-4 p-4 bg-black border rounded shadow-lg ">
                            <p class="">With my personalized approach, I cater to the unique needs and learning styles of each student.</p>
                            <p>I have a <span className='text-xl text-amber-400 font-bold'> message to you</span>:</p>
                            <pre>Whether you're preparing for exams,</pre>
                            <pre>Aiming to improve your grades,or seeking</pre>
                            <pre>A deeper understanding of the subject matter, </pre>
                            <pre>I am here to support you every step of the way.</pre>
                        
                    </div>
                    <p class="text-gray-600">
                        Join with me on this educational journey and unlock your full potential in Physics and ICT!
                    </p>
                    <div className='divider'>Thanks for read me 👌</div>
                    <div className=''>
                        <p className='text-end text-red-400 text-xl font-extrabold'> Md: Al Mubin Sarker</p>
                        <p className='text-end font-medium'>👨‍🎓 BSc in Physics</p>
                        <p className='text-end font-medium'>💻 A full Stack Web developer</p>
                    </div>
                </div>



            </div>
            {/* About Me section END */}
            {/* About Subjects section start */}
            <AboutSubjects />
            {/* About Subjects section END */}
        </>
    );
};

export default AboutUs;