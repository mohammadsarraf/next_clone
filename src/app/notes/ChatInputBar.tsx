'use client'

import React, {useState} from "react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import "./ChatInputBar.css";
import * as fb from '../functions/Class'


export default function ChatInputBar(props) {
  	const [conversation, setConversation] = useState('')
	const [message, setMessage] = useState('')
	const db = fb.getDatabase();

	const handleMessage = (e: any) => {
        setMessage(e.target.value);
    };

	const handleSendClick = async () => {
		await fb.handleChat(db, message, "props.username", setConversation, conversation);
		setMessage('');
    };

	return (
		<div className="chat-input-bar">
		<div className="input-container-chat">
			<input type="text" 
				placeholder="Type a message..." 
				value={message} onChange={handleMessage}
			/>
			<div className="plus-icon"><FaPlus /></div>
		</div>
		<button className="send-button" onClick={handleSendClick}><FaPaperPlane /></button>
		</div>
	);
}
