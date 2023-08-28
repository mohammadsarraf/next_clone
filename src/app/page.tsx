'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Components/Navbar';
import ComposerBox from './Components/ComposerBox';
import AppNavbar from './Components/AppNavbar';
import MainContent from './Components/MainContent';
import Test from './Components/Test';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import {onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { setupAuthListener, signInUser, signOutUser, auth, app, db} from './user';
import * as fb from './functions/Class'


export default function Home() {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = setupAuthListener((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);


    const handleLogin = async () => {
        const loggedIn = await signInUser(username, password);
        if (loggedIn) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    };

    const handleLogout = async () => {
        const loggedOut = await signOutUser();
        if (loggedOut) {
            alert('Logged out successfully');
        } else {
            console.error('Not logged out');
        }
    };

	return (
        // <div className='App'>
			<Test
				user={user}
				username={username}
				password={password}
				onUsernameChange={setUsername}
				onPasswordChange={setPassword}
				onSubmit={handleLogin}
				onLogout={handleLogout}
			/>
        //     {/* Render other components based on user authentication */}
        //     {user ? (
        //         <>
        //             <Navbar />
        //             <AppNavbar 
        //                 username={user.displayName} 
        //                 onImageChange={handleImageChange} 
        //                 onImageUpload={handleImageUpload} 
        //                 profilePicture={profilePicture}
        //             />
        //             <MainContent />
        //         </>
        //     ) : null}
        // </div>
	)
}
