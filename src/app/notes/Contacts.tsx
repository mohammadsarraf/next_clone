import React, {useState, useEffect} from "react"
import { FaUser } from "react-icons/fa"
import './Contacts.css'

export default function Contacts(props: any) {
    return(
            <div className="contact-card">
                <div className="contact-pf"><FaUser /></div>
                <div className="contact-info">
                    <div className="displayName">{props.userName}</div>
                    <div className="userStatus">{props.status}</div>
                </div>
            </div>
    )
}