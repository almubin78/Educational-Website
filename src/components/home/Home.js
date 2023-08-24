import React, { useContext } from 'react';
import { VarContext } from '../../context/AuthProvider';
import OurStudents from './OurStudents';
import Comment from './Comment';


const Home = () => {
    const {loading } = useContext(VarContext);
    // console.log(user);
    if (loading) {
        return <p>Please wait...</p>
    }
    return (
        <div>
            <Comment />
            <OurStudents/>
        </div>
    );
};

export default Home;