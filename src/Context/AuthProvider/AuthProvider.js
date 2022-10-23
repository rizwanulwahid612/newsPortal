import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../component/firebase/firebase';


export const AuthContext =createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    
    // const user={displayName:'Batash Ali'}

    const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup (auth,provider)
    }
    const varifyEmail=()=>{
        return sendEmailVerification(auth.currentUser)

    }
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile =(profile)=>{
        setLoading(true)
         return updateProfile(auth.currentUser,profile)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);  
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
        }
        setLoading(false)  
        })
        return ()=>unsubscribe()
    },[])

    const authInfo ={user,providerLogin,logOut,createUser,signInUser,loading,updateUserProfile,varifyEmail,setLoading}

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;