import React, { useContext } from 'react';
import { VarContext } from '../../context/AuthProvider';
import OurStudents from './OurStudents';
import Comment from './Comment';
import Director from './Director';
import useDynamicTitle from '../hooks/useDyanmicTitle';
import Motivational from '../Motivational/Motivational';


const Home = () => {
    const { loading } = useContext(VarContext);
    useDynamicTitle('Home')
    // console.log(user);
    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }
    return (
        <div>
            
           <Motivational/>
            <Comment />
            <div className="divider text-2xl mb-5">Panel</div>
            <Director />
            <OurStudents />
        </div>
    );
};

export default Home;