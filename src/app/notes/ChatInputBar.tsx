'use client'

import React, {useState} from "react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import "./ChatInputBar.css";
import * as fb from '../functions/Class'


export default function ChatInputBar({ message, handleMessage, handleSendClick }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            handleMessage(e); // Update the message state
        } else if (e.key === 'Enter') {
            e.preventDefault();
            handleSendClick();
        }
    };
	
    return (
        <div className="chat-input-bar">
            <div className="input-container-chat">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={handleMessage}
                    onKeyDown={handleKeyDown}
                />
                <div className="plus-icon"><FaPlus /></div>
            </div>
            <button className="send-button" onClick={handleSendClick}><FaPaperPlane /></button>
        </div>
    );
}
