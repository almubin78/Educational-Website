import React from 'react';
import Footer from '../footer/Footer';
import MomentSecond from '../Test/MomentSecond';
import Navber from '../NavigationBar/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Navber/>
            <MomentSecond/>
            <Outlet></Outlet>
            <div id='footer'>
            <Footer/>
            </div>
        </div>
    );
};

export default Main;