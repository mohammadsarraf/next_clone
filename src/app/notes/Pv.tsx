"use client"
import React, { useState, useEffect, useRef} from "react";
import { FaUser, FaEllipsisV } from "react-icons/fa";
import './Pv.css';
import ChatBubble from "./ChatBubble";
import ChatInputBar from "./ChatInputBar";
import * as fb from '../functions/Class';

export default function Pv(props) {
    const [conversation, setConversation] = useState([]);
    const [message, setMessage] = useState('');
    const db = fb.getDatabase();
    const fromUsername = props.username;
    const toUsername = "Kevin Garvey";
	
	const chatContainerRef = useRef(null);
    useEffect(() => {
        async function fetchAndSetConversation() {
            const chatConversation = await fb.fetchChat(db, fromUsername, toUsername);
            setConversation(chatConversation); // Reverse the conversation array
        }
        fetchAndSetConversation();
    }, [db, fromUsername, toUsername]);

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleSendClick = async () => {
	    await fb.handleChat(db, message, fromUsername, toUsername, setConversation, conversation);
		setMessage('');

		// Fetch the updated conversation and append new messages
		const updatedConversation = await fb.fetchChat(db, fromUsername, toUsername);
		setConversation(updatedConversation);

		chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

    };

    return (
        <div className="Pv-page">
            <div className="top-bar">
                <div className="user-card">
                    <div className="user-pf"><FaUser /></div>
                    <div className="user-info">
                        <div className="displayName">{toUsername}</div>
                        <div className="userStatus">Online</div>
                    </div>
                </div>
                <div className="more-options"><FaEllipsisV className="dragon"/></div>
            </div>
            <div className="chat-container" ref={chatContainerRef}>
                {conversation.map((chat) => (
                    <ChatBubble key={chat.id} message={chat.message} sender={true} sent={true} />
                ))}
            </div>
            <ChatInputBar
                message={message}
                handleMessage={handleMessage}
                handleSendClick={handleSendClick}
            />
        </div>
    );
}
