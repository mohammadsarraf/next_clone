"use client"
import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaEllipsisV } from "react-icons/fa";
import {MdArrowBackIosNew} from 'react-icons/md'
import ChatBubble from "./ChatBubble";
import ChatInputBar from "./ChatInputBar";
import * as fb from '../../functions/Class';

export default function Pv(props: any) {
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

    const handleMessage = (e: any) => {
        setMessage(e.target.value);
    };

    const handleSendClick = async () => {
        await fb.handleChat(db, message, fromUsername, toUsername, setConversation, conversation);
        setMessage('');

        // Fetch the updated conversation and append new messages
        const updatedConversation = await fb.fetchChat(db, fromUsername, toUsername);
        setConversation(updatedConversation);

        // chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

    };

    return (
        <div className="w-auto h-auto">
            <div className="flex items-center bg-blue-100 bg-opacity-5 px-1">
                <div className="relative hover:cursor-pointer justify-start"> {/*Top BAR*/}
                    <MdArrowBackIosNew onClick={null}/>
                </div>
                <div className="flex items-center w-full ml-1">
                    <div className="flex items-center justify-center w-14 h-14 bg-purple-800 rounded-full m-3 ml-0"> {/*Pf picture*/}
                        <FaUser />
                    </div>
                    <div className="py-3"> {/*Name & status*/}
                        <div className="text-red-300">{toUsername}</div>
                        <div className="text-blue-300">Online</div>
                    </div>
                </div>
                <div className="relative hover:cursor-pointer"><FaEllipsisV /></div>
            </div>
            <div className="flex flex-col p-3 overflow-y-auto h-96 w-auto  scrollbar-thumb-gray-900 scrollbar-track-transparent scrollbar-thin bg-red-900 bg-opacity-10">
                {conversation.map((chat: any) => (
                    <ChatBubble key={chat.id} message={chat.message} />
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