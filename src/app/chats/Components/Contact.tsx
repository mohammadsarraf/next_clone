import React, {useState, useEffect} from "react"
import { FaUser, FaArrowRight } from "react-icons/fa"
import Link from "next/link"

export default function Contact(props: any) {
    return(
        <Link className="flex items-center rounded text-white hover:bg-gray-50 hover:bg-opacity-5 hover:cursor-pointer" href={`./chats/${props.userName}`}>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-900 rounded-full m-3 ml-0"><FaUser /></div>
            <div className="py-3">
                <div className="displayName">{props.userName}</div>
                <div className="userStatus">{props.status}</div>
            </div>
        </Link>

    )
}