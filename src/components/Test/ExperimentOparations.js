import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const ExperimentOparations = () => {
    //Warn!!
    // this system when made admin done but it not render initial time so that , In this case I have to use tanstack quray
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // fetch('https://localhost:5000/students') এখানে https use করার কারনে সার্ভার থেকে ডাটা আসতো না। 
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log('data from experiments',data)
            })

    }, [])

    const handleMakeAdmin = user => {
        axios.post(`http://localhost:5000/users/admin/${user._id}`)
            .then(() => {
                // Fetch the updated list of users after making the user an admin
                axios.get('http://localhost:5000/students')
                    .then(res => {
                        setUsers(res.data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} is an Admin Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching updated users:', error);
                    });
            })
            .catch(error => {
                console.error('Error making user an admin:', error);
            });
    };
    return (
        <>
            <h3>Hello from Experiments</h3>
            {
                users.map((user, index) => <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        {
                            user?.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white">Make Admin</button>
                        }
                    </td>

                </tr>)
            }
        </>
    );
};

export default ExperimentOparations;


