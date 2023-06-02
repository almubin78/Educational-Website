import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../../context/AuthProvider';

const NavigationBar = () => {
    const {user,loading,logOut} = useContext(VarContext);
    // console.log(user);
    const handleSignOut= () =>{
        logOut();
    }
    return (
        <div className='flex justify-around'>
            <Link to='/'>Home</Link>
            {
                user?.uid ?  
                <>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/routine'>Routine</Link>
                <button onClick={handleSignOut}>Log Out</button>

                </>
                :
               
                <>
                 <Link to='/about'>Intention</Link>
                <Link to='/register'>Register</Link>
                </>
            }
            
            
        </div>
    );
};

export default NavigationBar;