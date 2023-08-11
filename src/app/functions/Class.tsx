import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
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


//User writing in composerBox
export const handlePost = async (content: string, username: string) => {
    if (content.trim() !== '') {
        try {
            const userPostsRef = doc(db, 'userPosts', username);
            await setDoc(
                userPostsRef,
                {
                    [Date.now()]: {
                        content: content,
                        likes: 0,
                        comments: 0,
                        timestamp: serverTimestamp(),
                    },
                },
                { merge: true }
            );
            console.log('Post uploaded successfully');
            
        } catch (error) {
            console.error('Error uploading post', error);
        }
    }
};

export const handleDisplayNameUpdate = async (user, displayName) => {
    console.log("Hello")
    if (user && displayName) {
        console.log(user)
        try {
            // Update the user's display name in Firebase
            await updateProfile(user, { displayName: displayName });
            console.log('Display name updated successfully');

        } catch (error) {
            console.error('Error updating display name', error);
        }
    }
};

// export async function getUserPosts(userId: string) {
//     try {
//         const userPostsRef = doc(db, 'userPosts', userId);
//         const userPostsSnapshot = await getDocs(userPostsRef);

//         if (userPostsSnapshot.exists()) {
//             return userPostsSnapshot.data();
//         } else {
//             console.log('User has no posts.');
//             return {};
//         }
//     } catch (error) {
//         console.error('Error getting user posts', error);
//         return {};
//     }
// }