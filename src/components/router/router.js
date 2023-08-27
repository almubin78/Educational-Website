import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../home/Home";
import Register from "../register/Register";
import Routine from "../Routine/Routine";
import Login from "../login/Login";
import AboutUs from "../AboutUs/AboutUs";
import Error from "../Error";
import PracticeMCQ from "../PracticeMCQ/PracticeMCQ";
import MakeMCQ from "../PracticeMCQ/MakeMCQ";
import PrivateRoute from "./PrivateRoute";
import PhysicsCalculator from "../MathSection/PhysicsCalculator ";
import ResetPass from "../PasswordRelated/ResetPass";



// main work from here
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/routine',
                element:<Routine/>
            
            },
            {
                path:'/reset',
                element:<ResetPass/>
            
            },
            {
                path:'/mcq',
                element:<MakeMCQ/>
            
            },
            {
                path:'/calculationMath',
                element:<PhysicsCalculator/>
            
            },{
                path:'/login',
                element:<Login/>
            },{
                path:'/register',
                element:<Register/>
            
            },{
                path:'/about',
                element: <AboutUs/>
            }
            
            ,
            {
                path:'/practice',
                element: <PracticeMCQ/>
            }
        ]
    },
    
    {
        path:'*',
        element: <Error/>
    }
    
    // ,
    // {
    //     path:'/practice',
    //     element: <PrivateRoute><PracticeMCQ/></PrivateRoute>
    // }
])

//export
export default router;