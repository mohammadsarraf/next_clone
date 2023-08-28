'use client'
import React, { useState, useEffect } from "react"
import './DM.css'
import { FaUser, FaSearch, FaArrowRight } from "react-icons/fa"
import { TbUserSearch } from "react-icons/tb";
import Contact from "./Contact";
import ContactsList from "./ContactsList";
import { constants } from "buffer";

export default function DM() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [searched, setSearched] = useState("");
    const [filteredContacts, setFilteredContacts] = useState([]);

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
        const userName: any = prompt("UserName: ");
        const status = prompt("Status: ");

        // Create a new array with the new contact and update state
        const newContacts: any = [
            ...contacts,
            {
                userName: userName,
                status: status,
            },
        ];

        setContacts(newContacts);
        setSearched(userName); // Update searched to trigger filtering
    };

    const handleFilter = (query: any) => {
        if (!query) {
            return contacts; // Return all contacts if query is empty
        }
        return contacts.filter((contact) => {
            return contact.userName.toLowerCase().includes(query.toLowerCase());
        });
    };

    const handleSearch = (e: any) => {
        setSearched(e.target.value);
    };

    useEffect(() => {
        const filtered: any = handleFilter(searched);
        setFilteredContacts(filtered.sort());
    }, [searched]);

    return (
        <div className="dm">
            <div className="user-card">
                <div className="user-pf"><FaUser /></div>
                <div className="user-info">
                    <div className="displayName">Kevin Garvey</div>
                    <div className="userStatus">Online</div>
                </div>
            </div>
            <div className="search">
                <button onClick={handleAddFriend}><TbUserSearch /></button>
                <div className="search-bar">
                    <input
                        className='search-input'
                        value={searched}
                        onChange={handleSearch} // Listen to input changes
                    />
                    <FaSearch />
                </div>
            </div>
            <ContactsList
                contacts={filteredContacts} // Make sure this is defined
                listName={`Friends`}
                listLength={contacts.length} // You can also use filteredContacts.length
                isExpanded={isExpanded}
                handleIsExpanded={handleIsExpanded}
                onClick={null}
            />
        </div>
    )
}
