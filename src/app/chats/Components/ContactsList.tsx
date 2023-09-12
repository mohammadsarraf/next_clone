import React from "react";
import Contact from "./Contact";
import { FaUser, FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function ContactsList(props: any) {
    return (
        (!props.isExpanded ? (
            <div className="flex flex-col bg-red-900 bg-opacity-95" >
                <button className="flex items-center text-white w-auto outline-none border-none bg-yellow-500 bg-opacity-5 hover:cursor-pointer" onClick={props.handleIsExpanded}> {props.listName}(0,{props.listLength})
                    <FaArrowRight className="text-white w-3 h-3 ml-2" />
                </button>
            </div>
        ) : (
            <div className="flex flex-col bg-blue-500 bg-opacity-5">
                <button className="flex items-center text-white w-auto outline-none border-none bg-yellow-500 bg-opacity-5 hover:cursor-pointer" onClick={props.handleIsExpanded}> {props.listName}(0,{props.listLength})
                    <FaArrowDown className="text-white w-3 h-3 ml-2" />
                </button>
                {props.contacts.map((contact: any) => (
                    <Contact
                        key={contact.id}
                        userName={contact.userName}
                        status={contact.status}
                        handleClick={() => props.handleClick(contact.userName)}
                    />
                ))}
            </div>
        ))
    );
}
