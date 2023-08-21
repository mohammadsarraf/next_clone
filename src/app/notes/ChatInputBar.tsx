'use client'

import React, {useState} from "react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import "./ChatInputBar.css";
import * as fb from '../functions/Class'


export default function ChatInputBar(props: any) {

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter' && e.shiftKey) {
            props.handleMessage(e); // Update the message state
        } else if (e.key === 'Enter') {
            e.preventDefault();
            props.handleSendClick();
        }
    };
	
    return (
        <div className="chat-input-bar">
            <div className="input-container-chat">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={props.message}
                    onChange={props.handleMessage}
                    onKeyDown={handleKeyDown}
                />
                <div className="plus-icon"><FaPlus /></div>
            </div>
            <button className="send-button" onClick={props.handleSendClick}><FaPaperPlane /></button>
        </div>
    );
}
