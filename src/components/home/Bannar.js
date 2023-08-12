import 'aos/dist/aos.css';
import Typewriter from 'react-ts-typewriter';

const Bannar = () => {
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

            {/* Auto Type Section */}
            <span>Build Your:</span>
            <Typewriter
                className='mb-5'
                text='Learning Process'
                loop={true}
                speed={200}
                delay={300}
            />
            <span
                style={{ letterSpacing: '2px' }}
                class="inline-block animate-bounce rounded-full mt-3 p-3 bg-teal-600  text-white text-sm"
            >Coming Soon....
            </span>
            {/* <progress className="progress w-56"></progress> */}


        </div>
    );
};

export default Bannar;