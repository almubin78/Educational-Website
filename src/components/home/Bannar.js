import React from 'react';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

const Bannar = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Learning^1000', ' Thinking'],
            typeSpeed: 200,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div

            className='mx-auto p-3 font-bold'
            style={{
                background: 'url("https://i.ibb.co/qNLNf9v/physicsandict2.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '1200px',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                // textAlign: 'center',
                color: '#ffffff',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
            }}
        >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} >Build Your <span
                data-aos="fade-in"
                data-aos-delay="200"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"

                className='underline decoration-indigo-500 text-indigo-900 font-black'
            >Base</span> with me</h1>
            <p style={{ fontSize: '1.5rem' }}>I am here to help you <br /> to show the path of:</p>
            {/* Auto Type Section */}
            <span
                style={{ letterSpacing: '1px' }}
                className='font-black text-pink-100 bg-teal-600 p-3 rounded-lg'
                ref={el}>

            </span>
            <span
                style={{ letterSpacing: '2px' }}
                class="inline-block animate-bounce rounded-full p-3 bg-teal-600  text-white text-sm"
                >Process
            </span>
            

        </div>
    );
};

export default Bannar;