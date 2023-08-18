import React, { useState, useEffect } from 'react';
import './ComposerBox.css';
import * as fb from '../functions/Class';
import { FaUser, FaCamera, FaImage, FaPaperclip, FaLocationArrow, FaSmile, FaEdit } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    serverTimestamp,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDfGtvjHibH_VQNi3fIFxoJEI-_RzbrHCw",
//     authDomain: "twitter-clone-10996.firebaseapp.com",
//     databaseURL: "https://twitter-clone-10996-default-rtdb.firebaseio.com",
//     projectId: "twitter-clone-10996",
//     storageBucket: "twitter-clone-10996.appspot.com",
//     messagingSenderId: "617659631276",
//     appId: "1:617659631276:web:e7e713dfc82f3573244109",
//     measurementId: "G-3FDM8VPR8Q"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

export default function ComposerBox(props: any) {
    const [content, setContent] = useState('');
    const [tweetsData, setTweetsData] = useState([]);
    const [shouldPost, setShouldPost] = useState(false); // State for triggering post

    const db = fb.getDatabase();

    const adjustInputHeight = (textArea: any) => {
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
    };

    const handleContent = (e: any) => {
        setContent(e.target.value);
        adjustInputHeight(e.target);
    };

    const handlePostClick = async () => {
        await fb.handlePost(db, content, props.username, setTweetsData, tweetsData);
        setContent('');

    };


    return (
        <div className="box">
            <div className="top-bar">
                <FaUser className="user-icon" />
                <textarea
                    className="input-bar"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={handleContent}
                    rows={1}
                />
            </div>
            <div className="bot-bar">
                <div className="left-div">
                    <FaCamera className="actions" />
                    <FaImage className="actions" />
                    <FaPaperclip className="actions" />
                    <FaLocationArrow className="actions" />
                    <FaSmile className="actions" />
                </div>
                <div className="right-div">
                    <div className="draft">
                        <FaEdit className="draft-icon" />
                        Draft
                    </div>
                    <button className="post-button" onClick={handlePostClick}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}