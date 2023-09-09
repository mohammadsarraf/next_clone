import Link from 'next/link';
import React from 'react';
import { FaPiedPiperAlt, FaSearch, FaHome, FaShoppingCart, FaCalendarDay } from 'react-icons/fa';
import { SlFeed } from 'react-icons/sl';

export  default function SideNavbar() {
    return (
        <div className="fixed flex flex-col bg-gray-900 opacity-90 border-r-2 border-gray-500 w-80 h-screen items-center">
            <Link
                className="flex justify-left items-center  border-2 border-transparent transition bg-transparent px-4 py-2 rounded-md cursor-pointer w-full "
                href="/">
                <FaPiedPiperAlt className="w-16 h-16 mr-2 mb-2 text-green-700 " />
                <p className="m-0 text-3xl text-green-700 ">piedpiper</p>
            </Link>


            <div className="inline-flex items-center border-0 border-red-100 border-transparent transition bg-transparent px-3 py-3 my-1 hover:bg-blue-200 hover:bg-opacity-10 rounded-md cursor-pointer text-white w-full ease-in-out delay-1 hover:-translate-y-1 hover:scale-95">
                <FaSearch className="w-6 h-6 mr-2" />
                <input
                    className="w-auto bg-transparent  text-white border-0 outline-none"
                    placeholder="Explore PipedPiper..."
                />
            </div>


            <Link
                className="inline-flex items-center border-0 border-red-100 border-transparent bg-transparent px-3 py-2 my-1 rounded-md cursor-pointer text-white w-full transition-bg hover:bg-blue-200 hover:bg-opacity-10 transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-95"
                href="/chats"
            >
                <FaHome className="w-6 h-6 mr-2" />
                <p className="m-0 text-lg  text-white">Home</p>
            </Link>

            <div className="inline-flex items-center border-0 border-red-100 border-transparent bg-transparent px-3 py-2 my-1 rounded-md cursor-pointer text-white w-full transition-bg hover:bg-blue-200 hover:bg-opacity-10 transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-95">
                <FaShoppingCart className="w-6 h-6 mr-2" />
                <p className="m-0 text-lg  text-white">Market Place</p>
            </div>

            <div className="inline-flex items-center border-0 border-red-100 border-transparent bg-transparent px-3 py-2 my-1 rounded-md cursor-pointer text-white w-full transition-bg hover:bg-blue-200 hover:bg-opacity-10 transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-95">
                <FaCalendarDay className="w-6 h-6 mr-2" />
                <p className="m-0 text-lg  text-white">Event</p>
            </div>

            <div className="inline-flex items-center border-0 border-red-100 border-transparent bg-transparent px-3 py-2 my-1 rounded-md cursor-pointer text-white w-full transition-bg hover:bg-blue-200 hover:bg-opacity-10 transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-95">
                <SlFeed className="w-6 h-6 mr-2" />
                <p className="m-0 text-lg  text-white">Feed</p>
            </div>
        </div>
    );
}
