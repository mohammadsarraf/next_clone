import React, {useState, useEffect} from "react"
import './DM.css'
import { FaUser, FaSearch} from "react-icons/fa"
import { TbUserSearch } from "react-icons/tb";
import Contacts from "./Contacts";


export default function DM() {

    const contacts = [
        {
            userName: "Moe-Sarraf",
            status: "offline"
        },
        {
            userName: "2MSTR000",
            status: "offline"
        },        
        {
            userName: "KDLight",
            status: "offline"
        },
    ]

    return(
        <div className="dm">
            <div className="user-card">
                <div className="user-pf"><FaUser/></div>
                <div className="user-info">
                    <div className="displayName">Kevin Garvey</div>
                    <div className="userStatus">Online</div>
                </div>
            </div>
            <div className="search">
                <button><TbUserSearch/></button>
                <div className="search-bar">
                    <input className='search-input' ></input>
                    <FaSearch />
                </div>
            </div>
            {contacts.map((contact) => (
                <Contacts userName={contact.userName} status={contact.status}/>
            ))}
        </div>
    )
}