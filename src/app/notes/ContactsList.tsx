import React, {useState, useEffect} from "react"
import Contact from "./Contact"
import { FaUser, FaArrowRight, FaArrowDown } from "react-icons/fa"


export default function ContactsList(props: any) {

    return(
        (!props.isExpanded ? (
            <div className="list">
                <button className="friends-list" onClick={props.handleIsExpanded}> {props.listName}(0,{props.listLength})
                    <FaArrowRight className="list-icon"/>
                </button>
            </div>
        ):(
            <div className="list">
                <button className="friends-list" onClick={props.handleIsExpanded}> {props.listName}(0,{props.listLength})
                    <FaArrowDown className="list-icon"/>
                </button>
                {props.contacts.map((contact: any) => (
                    <Contact userName={contact.userName} status={contact.status}/>
                ))}
            </div>
        ))

    )
}