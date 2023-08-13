'use client'
import { FaUser } from "react-icons/fa"
import './Post.css'
import * as fb from '../functions/Class'
import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref, onValue } from "firebase/database";
import Post from "./Post"

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
const database = getDatabase()

export default function Trinity() {
    // const [isExpanded, setIsExpanded] = useState(true);
    // const [tweets, setTweets] = useState([]);
    // const [userTweets, setUserTweets] = useState({ counter: 0 }); // Initialize with an empty object
    // // State for user authentication
    // const [user, setUser] = useState(null);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [showSignInPage, setShowSignInPage] = useState(false); // State to control the visibility of SignInPage
    const [content, setContent] = useState([]);
    const username = "2MSTR000"; // Replace with your desired username
    const [tweetsData, setTweetsData] = useState([]); // Store the fetched tweets here
    
    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handlePostClick = () => {
        fb.handlePost(db, content, username, setTweetsData, tweetsData);
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTweets = await fb.fetchTweets(db);
            setTweetsData(fetchedTweets);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='comment-top-bar'>
                <FaUser className='comment-user-icon' />
                <input type='text' className='comment-input-bar' placeholder='Reply...' value={content} onChange={handleContent}/>
                <button onClick={handlePostClick}>send</button>
            </div>
            {tweetsData.map((tweet) => (
                <div key={tweet.tweetId}>
                    <Post 
                        username={tweet.username}
                        content={tweet.content}
                        // timestamp={tweet.timestamp.toDate().toString()}
                        />
                </div>
            ))}
        </div>
    );
}

