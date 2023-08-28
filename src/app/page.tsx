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
import { getAuth, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as fb from './functions/Class'

const firebaseConfig = {
    apiKey: "AIzaSyBZk6c8h9y9av6p17XaK5KRjjxvobkI_-A",
    authDomain: "nexttwitter-26380.firebaseapp.com",

    projectId: "nexttwitter-26380",
    storageBucket: "nexttwitter-26380.appspot.com",
    messagingSenderId: "371231691643",
    appId: "1:371231691643:web:8d11fe90652099e824a3de",
    measurementId: "G-GS2CDH21SW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default function Home() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);
	const [profilePictureUrl, setProfilePictureUrl] = useState('');
	const [selectedImage, setSelectedImage] = useState(null);
	const [profilePicture, setProfilePicture] = useState('');
	const [displayName, setDisplayName] = useState('');

	const storage = getStorage(app);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
		setUser(user);
		if (user) {
			getProfilePictureUrl(user.uid)
			.then((url) => setProfilePictureUrl(url))
			.catch((error) => console.error(error));
		}
		});

		return () => unsubscribe();
	}, []);

	const handleLogin = async () => {
		try {
		await signInWithEmailAndPassword(auth, username, password);
		alert('Login successful');
		} catch (error) {
		alert('Login failed');
		}
	};

	const handleLogout = async () => {
		try {
		await signOut(auth);
		alert('Logged out successfully');
		} catch {
		console.error('Not logged out');
		}
	};

	const handleImageChange = (file) => {
		if (user) {
		uploadProfilePicture(user.uid, file)
			.then(() => getProfilePictureUrl(user.uid))
			.then((url) => setProfilePictureUrl(url))
			.catch((error) => console.error('Error updating profile picture', error));
		}
	};

	const handleImageUpload = async () => {
		if (selectedImage && user) {
		try {
			const url = await uploadProfilePicture(user.uid, selectedImage);
			console.log('Image uploaded successfully', url);
			setProfilePicture(url);
			setSelectedImage(null);
		} catch (error) {
			console.error('Error uploading image', error);
		}
		}
	};

	const uploadProfilePicture = async (userId, file) => {
		const storageRef = ref(storage, `profile_pictures/${userId}`);
		const snapshot = await uploadBytes(storageRef, file);
		const url = await getDownloadURL(snapshot.ref);
		return url;
	};

	const getProfilePictureUrl = async (userId) => {
		const storageRef = ref(storage, `profile_pictures/${userId}`);
		const url = await getDownloadURL(storageRef);
		return url;
	};

	
	const updateDisplayName = async () => {
		await fb.updateDisplayName(user, displayName);
	};

	
	return (
		(!user ? (
		    <div className='App'>
				<Test
					user={user}
					username={username}
					password={password}
					displayName={displayName}
					onUsernameChange={setUsername}
					onPasswordChange={setPassword}
					onDisplayNameChange={setDisplayName}
					onSubmit={handleLogin}
					onLogout={handleLogout}
				/>


		    </div>
		) : (
		    <>
		        <div className='App'>

		            <Navbar />
		            <AppNavbar 
						username={user.displayName} 
						onImageChange={handleImageChange} 
						onImageUpload={handleImageUpload} 
						profilePicture={profilePicture}
					/>
		            <MainContent />
		        </div>

		    </>
			
		))
	);
}