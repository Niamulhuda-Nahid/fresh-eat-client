import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // crate user by email
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut user
    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    // set user name and photo
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    // sent a verification email
    const sedverificationEmail = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    // reset password by email
    const resetPassByEmail = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        sedverificationEmail,
        resetPassByEmail,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;