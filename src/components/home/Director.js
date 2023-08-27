import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Director = () => {
    const [director, setDirector] = useState([]);

    useEffect(() => {
         // mongodb
        // axios.get('http://localhost:5000/director')
        // compass
        // axios.get('http://localhost:8000/director')
        //Live site
        axios.get('https://phyict-server-almubin78.vercel.app/director')
            .then(res => {
                setDirector(res.data[0])
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg py-2">
                <div className="flex justify-around">
                    <div>
                        <h2 className="text-2xl font-semibold">{director.name}</h2>
                        <p className="text-gray-600 mb-4">{director.roll}</p>
                        <p className="text-green-600 mb-1 font-bold">{director.skill_one}</p>
                        <p className="text-green-600 mb-1 font-bold">{director.skill_two}</p>
                    </div>
                    <div className="avatar online"  onContextMenu={(e) => e.preventDefault()}>
                        <div className="w-24 h-24 rounded-full overflow-hidden ">
                            <img src={director.img} alt='Not Found' className="object-cover w-full h-full " style={{pointerEvents:'none'}}/>
                        </div>
                    </div>

                </div>
                <div className="p-6">


                    <p className="text-gray-600 mb-4">{director.interest}</p>
                    {/* <p className="text-gray-600 mb-4">{director.subjects}</p> */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Prior experience:</h3>
                        <p>Where I had lectured</p>
                        <ul className="list-disc pl-6">
                            <li>{director.previousInstitutionsOne}</li>
                            <li>{director.previousInstitutionsTwo}</li>
                            <li>{director.previousInstitutionsThree}</li>
                        </ul>
                    </div>
                    <div className="space-x-6">
                        <a href={director.facebook} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook text-blue-600 text-lg"></i>
                        </a>
                        <a href={director.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter text-blue-400 text-lg border"></i>
                        </a>
                        <a href={`https://t.me/${director.telegram_username}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram text-blue-300 text-lg"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Director;
