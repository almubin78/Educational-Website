import React, { createContext, useEffect, useState } from 'react';
import app from '../firebaseConfig/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';

//crating some variable

export const VarContext = createContext();
const auth = getAuth(app)

//main function is started from here.... 
const AuthProvider = ({children}) => {
    // helping variable
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState({});

    //create user
    const registerWithEmailAndPass = (email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    /* Login user */
    const loginWithEmailAndPass= (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }
    //update user
    const updateUser = (userInfo,photoURL) =>{
        
        return updateProfile(auth.currentUser, userInfo,photoURL);
    }
    /* LogOut */
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    /* Make user and loading */
    useEffect(()=>{
        const getOut = onAuthStateChanged(auth,selecTedUser =>{setUser(selecTedUser);setLoading(false)});
        return ()=>{getOut()}
    },[])
    //sending value for creating functions
    const info ={
        registerWithEmailAndPass,
        loginWithEmailAndPass,
        updateUser,
        loading,
        user,
        logOut
    }
    return (
        <VarContext.Provider value={info}>
            {children}
        </VarContext.Provider>
    );
};

export default AuthProvider;