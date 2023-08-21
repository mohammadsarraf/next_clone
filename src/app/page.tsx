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

const firebaseConfig = {
  apiKey: "AIzaSyDfGtvjHibH_VQNi3fIFxoJEI-_RzbrHCw",
  authDomain: "twitter-clone-10996.firebaseapp.com",
  databaseURL: "https://twitter-clone-10996-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-10996",
  storageBucket: "twitter-clone-10996.appspot.com",
  messagingSenderId: "617659631276",
  appId: "1:617659631276:web:e7e713dfc82f3573244109",
  measurementId: "G-3FDM8VPR8Q"
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

  interface user {
  displayName: string | null;
  // ... other properties you might have in the user object
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
      // if (user) {
      //   getProfilePictureUrl(user.uid)
      //     .then((url) => setProfilePictureUrl(url))
      //     .catch((error) => console.error(error));
      // }
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

  // const handleImageChange = (file: any) => {
  //   if (user) {
  //     uploadProfilePicture(user.uid, file)
  //       .then(() => getProfilePictureUrl(user.uid))
  //       .then((url) => setProfilePictureUrl(url))
  //       .catch((error) => console.error('Error updating profile picture', error));
  //   }
  // };

  // const handleImageUpload = async () => {
  //   if (selectedImage && user) {
  //     try {
  //       const url = await uploadProfilePicture(user.uid, selectedImage);
  //       console.log('Image uploaded successfully', url);
  //       setProfilePicture(url);
  //       setSelectedImage(null);
  //     } catch (error) {
  //       console.error('Error uploading image', error);
  //     }
  //   }
  // };

  // const uploadProfilePicture = async (userId, file) => {
  //   const storageRef = ref(storage, `profile_pictures/${userId}`);
  //   const snapshot = await uploadBytes(storageRef, file);
  //   const url = await getDownloadURL(snapshot.ref);
  //   return url;
  // };

  // const getProfilePictureUrl = async (userId) => {
  //   const storageRef = ref(storage, `profile_pictures/${userId}`);
  //   const url = await getDownloadURL(storageRef);
  //   return url;
  // };

  const updateDisplayName = async () => {
    if (user && displayName) {
      try {
        await updateProfile(user, {
          displayName: displayName,
          photoURL: null,
        });
        console.log('Display name updated successfully');
      } catch (error) {
        console.error('Error updating display name', error);
      }
    }
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
                onUpdateDisplayName={updateDisplayName} // Add this prop
            />
        </div>
    ) : (
        <>
            <div className='App'>

                <Navbar />
                <AppNavbar username={"Moe" || ''} onImageChange={null} onImageUpload={null} profilePicture={profilePicture} />
                <MainContent />
            </div>

        </>
        
    ))
  );
}