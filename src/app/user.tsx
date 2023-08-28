import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};


export const signInUser = async (username, password) => {
    try {
        await signInWithEmailAndPassword(auth, username, password);
        return true;
    } catch (error) {
        console.error('Login failed', error);
        return false;
    }
};

export const signOutUser = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.error('Logout failed', error);
        return false;
    }
};

export const setupAuthListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};


