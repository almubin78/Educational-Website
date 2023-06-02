import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../home/Home";
import Register from "../register/Register";
import Routine from "../Routine/Routine";
import Login from "../login/Login";
import Dashboard from "../Dashboard/Dashboard";



// main work from here
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },{
                path:'/register',
                element:<Register/>
            
            },{
                path:'/login',
                element:<Login/>
            },
            {
                path:'/routine',
                element:<Routine/>
            
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

//export
export default router;