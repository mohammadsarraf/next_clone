import React, { useState, useEffect } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { TbUserSearch } from "react-icons/tb";
import ContactsList from "./ContactsList";

export default function DM(props) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [searched, setSearched] = useState("");
    const [filteredContacts, setFilteredContacts] = useState([]);

    const handleUserClick = (userName) => {
        props.onUserClick(userName);
    };

    const [contacts, setContacts] = useState([
        {
            userName: "Moe-Sarraf",
            status: "offline",
        },
        {
            userName: "2MSTR000",
            status: "offline",
        },
        {
            userName: "KDLight",
            status: "offline",
        },
    ]);

    const handleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const handleAddFriend = () => {
        const userName = prompt("UserName: ");
        const status = prompt("Status: ");

        // Create a new array with the new contact and update state
        const newContacts = [
            ...contacts,
            {
                userName: userName,
                status: status,
            },
        ];

        setContacts(newContacts);
        setSearched(userName); // Update searched to trigger filtering
    };

    const handleFilter = (query) => {
        if (!query) {
            return contacts; // Return all contacts if query is empty
        }
        return contacts.filter((contact) => {
            return contact.userName.toLowerCase().includes(query.toLowerCase());
        });
    };

    const handleSearch = (e) => {
        setSearched(e.target.value);
    };

    useEffect(() => {
        const filtered = handleFilter(searched);
        setFilteredContacts(filtered.sort());
    }, [searched]);

    return (
        <div className="w-fit bg-red-500 bg-opacity-5 px-3 border-t-2 border-l-2 border-gray-500">
            <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-700 rounded-full "><FaUser /></div>
                <div className="p-3 bg-opacity-5 bg-red-50 w-auto">
                    <div className="text-white  ">Kevin Garvey</div>
                    <div className="text-white  ">Online</div>
                </div>
            </div>
            <div className="flex my-3">
                <button
                    className="flex items-center justify-center w-10 h-10 mr-3 rounded border-none outline-none  bg-white bg-opacity-5"
                    onClick={handleAddFriend}><TbUserSearch className={`w-5 h-5 text-white`} /></button>
                <div className="flex items-center bg-red-900 bg-opacity-5 bg-white rounded p-1">
                    <input
                        className="flex-grow border-none outline-none bg-transparent text-white"
                        value={searched}
                        onChange={handleSearch} // Listen to input changes
                    />
                    <FaSearch className={`w-5 h-5 text-white`} />
                </div>
            </div>
            <ContactsList
                contacts={filteredContacts}
                listName={`Friends`}
                listLength={contacts.length}
                isExpanded={isExpanded}
                handleIsExpanded={handleIsExpanded}
                handleClick={props.handleClick}
            />
        </div>
    );
}
