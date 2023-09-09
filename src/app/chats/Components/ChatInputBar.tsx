'use client'
import React, { useState } from "react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
// import * as fb from '../functions/Class'


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
        <div className="flex items-center p-3">
            <div className="flex items-center bg-white rounded-full p-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={props.message}
                    onChange={props.handleMessage}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none px-2 text-black"
                />
                <div className="text-gray-700 p-1 cursor-pointer">
                    <FaPlus />
                </div>
            </div>
            <button
                className="send-button ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3"
                onClick={props.handleSendClick}
            >
                <FaPaperPlane />
            </button>
        </div>
    );
}
