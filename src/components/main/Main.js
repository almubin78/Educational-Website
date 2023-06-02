import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;