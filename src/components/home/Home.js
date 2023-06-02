import React, { useContext } from 'react';
import Bannar from './Bannar';
import AboutUs from '../AboutUs/AboutUs';
import { VarContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user} =useContext(VarContext);
    return (
        <div>
            {
                user?.uid ?  
                <>
                    <marquee ><h3 className='mt-6'>Welcome <span className='text-lg font-bold uppercase text-yellow-500'>{user.displayName}</span>. I hope you enjoy the journey</h3></marquee>
                </> 
                :<>
                <marquee><h2 className='text-purple-500 m-6'>For see more features please  <Link className='btn btn-sm' to='/register'>Register</Link> !!</h2></marquee>
                </>
            }
           <Bannar/>
           About us: 
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;