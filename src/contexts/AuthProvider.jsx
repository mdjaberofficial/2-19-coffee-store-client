import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    

    const createUser = (email, password) => {
        // create user with firebase
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signin user
    const signInUser = (email, password) => {
        // create user with firebase
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        createUser,
        signInUser
    }



    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;