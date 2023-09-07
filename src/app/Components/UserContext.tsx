'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, User as FirebaseUser, } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBZk6c8h9y9av6p17XaK5KRjjxvobkI_-A",
    authDomain: "nexttwitter-26380.firebaseapp.com",
    projectId: "nexttwitter-26380",
    storageBucket: "nexttwitter-26380.appspot.com",
    messagingSenderId: "371231691643",
    appId: "1:371231691643:web:8d11fe90652099e824a3de",
    measurementId: "G-GS2CDH21SW"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const UserContext = createContext(null);

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

export const signInUser = async (username, password) => {
    try {
        await signInWithEmailAndPassword(auth, username, password);
        return { success: true };
    } catch (error) {
        console.error('Login failed', error);
        return { success: false, error: error.message };
    }
};

export const signOutUser = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Logout failed', error);
        return { success: false, error: error.message };
    }
};

export const setupAuthListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = setupAuthListener((user) => {
            setCurrentUser(user);
        });

        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
};