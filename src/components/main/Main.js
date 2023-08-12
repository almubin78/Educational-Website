import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import MomentSecond from '../Test/MomentSecond';
import { VarContext } from '../../context/AuthProvider';
import Navber from '../NavigationBar/Navber';
import Marquee from 'react-fast-marquee';

const Main = () => {
    const {user} = useContext(VarContext)
    return (
        <div className='container mx-auto'>
            <Navber/>
            {
                user?.uid ?
                    <>
                        <Marquee speed={50}><h3 className='mt-6 mx-3'><span></span>  Welcome <span className='text-lg font-bold uppercase text-yellow-500'>{user.displayName}</span> !! Remind that, এটি একটি পরীক্ষামুলক ওয়েবসাইট। সময়মত এটিকে লাইভ সাইটে পরিণত করা হবে ইনশা-আল্লাহ!!  </h3></Marquee>
                    </>
                    : <>
                        <Marquee speed={70}><h2 className='text-purple-500 m-6'>Physics MCQ (আপাতত-SSC) Practice করতে চাইলে <Link className='btn btn-sm' to='/register'>Register</Link> কর !! এটি Login পেজে খুজে পাবে।😎😕</h2></Marquee>
                    </>
            }
            <MomentSecond/>
            <Outlet></Outlet>
            <div id='footer'>
            <Footer/>
            </div>
        </div>
    );
};

export default Main;