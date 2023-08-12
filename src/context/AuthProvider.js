import React, { createContext, useEffect, useState } from 'react';
import app from '../firebaseConfig/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

//crating some variable

export const VarContext = createContext();
const auth = getAuth(app);
// console.log('trying to get the `auth`',auth);
//got it
const googleProvider = new GoogleAuthProvider();

//main function is started from here.... 
const AuthProvider = ({children}) => {
    // helping variable
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    //create user
    const registerWithEmailAndPass = (email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    /* Login user */
    const loginWithEmailAndPass= (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }
    // Register or Login With Google
    const googleSignIn = ()=>{
        return signInWithPopup(googleProvider)
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
        const getOut = onAuthStateChanged(auth,selecTedUser =>{
            console.log('user observ',selecTedUser);
            setUser(selecTedUser);
            setLoading(false);
            // console.log(user);
        })
        return ()=>getOut()
    },[])

    //sending value for creating functions
    const info ={
        registerWithEmailAndPass,
        loginWithEmailAndPass,
        googleSignIn,
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