import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VarContext } from '../../context/AuthProvider';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(VarContext)
    // console.log('user from Navbar', user);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleSignOut = () => {
        logOut().then(() => { }).catch(err => console.log(err))
    }
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
               
                <Link to="/" className="text-white text-xl font-bold">
                    PhyICT
                </Link>
                <button
                    className="text-white md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <i className="fas bg-gray-500 p-2 rounded fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </button>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <NavLink
                        to="/"
                        className="block mt-4 md:inline-block md:mt-0 text-white mr-4 link"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="block mt-4 md:inline-block md:mt-0 text-white mr-4 link"
                    >
                        About
                    </NavLink>
                    {
                        user ? <>
                            <NavLink
                                to="/routine"
                                className="block mt-4 md:inline-block md:mt-0 text-white mr-4 link"
                            >
                                Schedule
                            </NavLink>
                            <NavLink
                                to="/practice"
                                className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
                            >
                                Practice
                            </NavLink>
                            {/* <NavLink
                                to="/mcq"
                                className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
                            >
                                Make MCQ
                            </NavLink> */}
                            <button className='btn btn-primary mt-2' onClick={handleSignOut}>Sign Out</button>
                            {/* vul ta korechilam ekhane handleSignOut na likhe handleSignOut() diyechilam*/}

                        </> : <>
                            <NavLink
                                to="/login"
                                className="block mt-4 md:inline-block md:mt-0 text-white mr-4 link"
                            >
                                Login
                            </NavLink>
                        </>
                    }


                    {/* Add more NavLinks here */}
                </div>
            </div>
        </nav>
    );
};

export default Navber;