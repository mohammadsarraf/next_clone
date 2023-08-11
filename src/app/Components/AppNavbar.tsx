import React, { useState } from 'react';
import { FaHome, FaFonticons, FaUserAlt } from "react-icons/fa";
import './AppNavbar.css';

export default function AppNavbar(props: any) {
    const [showImagePopup, setShowImagePopup] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        props.onImageChange(file);
        setShowImagePopup(false);
    };

    const handleImageUpload = () => {
        props.onImageUpload();
        setShowImagePopup(false);
    };

    return (
        <div className="app-navbar">
            <div className="right-side">
                <FaHome className="route-icon" /> Home
                <div className="feed-actions">
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                </div>
            </div>
            <div className="left-side">
                <div className='feed-dm'>
                    <FaFonticons className="direct-message" />
                    <FaFonticons />
                </div>
                <div className="user-profile">
                    <p className="profile-name">{props.username}</p>
                    <FaUserAlt classname="profile-picture" onClick={() => setShowImagePopup(true)} />
                </div>
            </div>

            {showImagePopup && (
                <div className="image-popup">
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button onClick={props.handleImageUpload}>Upload</button>
                    <button onClick={() => setShowImagePopup(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}