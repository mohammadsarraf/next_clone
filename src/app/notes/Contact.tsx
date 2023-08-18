import React, {useState, useEffect} from "react"
import { FaUser, FaArrowRight } from "react-icons/fa"
import './Contact.css'

export default function Contact(props: any) {
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