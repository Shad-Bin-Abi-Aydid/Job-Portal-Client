import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase/firebase.init';


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User with Email and password.
    const createUser = (email, password) =>{

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SignIn user with Email and Password.
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log('state Captured by ', currentUser);

        })
        return () =>{
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;