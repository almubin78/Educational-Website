import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { VarContext } from "../../context/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(VarContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email,img: loggedInUser.photoURL }
                // mongodb atlas
                // fetch('http://localhost:5000/student', {
                    // compass
                // fetch('http://localhost:8000/student', {
                fetch('https://phyict-server-almubin78.vercel.app/student', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider">Continue with google</div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;