'use client'
import React, { useState, useEffect } from "react"
import { FaUser, FaSearch, FaArrowRight, FaDragon, FaEllipsisV } from "react-icons/fa"
import './Pv.css';
import ChatBubble from "./ChatBubble";
import ChatInputBar from "./ChatInputBar";
import * as fb from '../functions/Class'

const init =`Well, this is interesting. #BaldursGate3 uses "Point & Click" movement on PC with a M&K. Which made me curious how that would even work on Consoles.I decided to test it with my controller and out it turns out the movement system completely changes while using a controller.`


export default function Pv(props) {


	return (
		<div className="Pv-page">
		<div className="top-bar">
			<div className="user-card">
			<div className="user-pf"><FaUser /></div>
			<div className="user-info">
				<div className="displayName">Kevin Garvey</div>
				<div className="userStatus">Online</div>
			</div>
			</div>
			<div className="more-options"><FaEllipsisV className="dragon"/></div>
		</div>
		<div className="chat-container">
			<ChatBubble message={init} sender={false} sent={false} />
			<ChatBubble message={init} sender={true} sent={true} />
		</div>
		<ChatInputBar />
		</div>
	);
}
