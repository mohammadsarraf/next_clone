import React from 'react';
import { FaUserAlt, FaFonticons, FaHome, FaShoppingCart, FaCalendarDay } from 'react-icons/fa';
import { BiMessageRounded, BiPlanet } from "react-icons/bi";

export default function NavApptest(props: any) {
    return (
        <div className="flex justify-between items-center bg-gray-900 opacity-90 p-4 border-b-2 border-gray-500 mb-5">
            <div className="right-side flex items-center">
                <FaHome className="mr-2 w-5 h-5" /> Home
                <div className="feed-actions ml-10 space-x-2">
                    <button className="border rounded-lg px-3 py-1">Button 1</button>
                    <button className="border rounded-lg px-3 py-1">Button 2</button>
                    <button className="border rounded-lg px-3 py-1">Button 3</button>
                </div>
            </div>
            <div className="left-side flex items-center">
                <div className="flex mr-8">
                    <BiMessageRounded className="w-5 h-5 mr-2" />
                    <BiPlanet className="w-5 h-5 " />
                </div>
                <div className="user-profile flex items-center">
                    <div className="font-bold text-lg">{props.username}</div>
                    <FaUserAlt className="w-10 h-10 rounded-full ml-2 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}