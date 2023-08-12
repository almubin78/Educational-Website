import React, { useContext } from 'react';
// import Bannar from './Bannar';
// import AboutUs from '../AboutUs/AboutUs';
import { VarContext } from '../../context/AuthProvider';
// import Comment from './Comment';
// import Slider from './Slider';
// import NewsTric from '../Test/NewsTric';
import OurStudents from './OurStudents';
// import Apply from './Apply'
import Comment from './Comment';
// import ExperimentOparations from '../Test/ExperimentOparations';


const Home = () => {
    const {loading } = useContext(VarContext);
    // console.log(user);
    if (loading) {
        return <p>Please wait...</p>
    }
    return (
        <div>
            
            {/* <ExperimentOparations/> */}
            <Comment />
            {/* <AboutUs></AboutUs> */}
            {/* <Apply></Apply> */}
            <OurStudents/>
            {/* <NewsTric /> */}
            {/* <Bannar /> */}
            {/* <Slider /> */}
            {/* <div className='my-8'></div> */}
        </div>
    );
};

export default Home;