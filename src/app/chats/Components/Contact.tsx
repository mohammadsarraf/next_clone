import React, {useState, useEffect} from "react"
import { FaUser, FaArrowRight } from "react-icons/fa"
import './Contact.css'
import Link from "next/link"

export default function Contact(props: any) {
    return(
        <Link className="contact-card" href={`./chats/${props.userName}`}>
            <div className="contact-pf"><FaUser /></div>
            <div className="contact-info">
                <div className="displayName">{props.userName}</div>
                <div className="userStatus">{props.status}</div>
            </div>
        </Link>

    )
}