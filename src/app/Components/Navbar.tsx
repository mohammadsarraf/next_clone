import { FaPiedPiperAlt, FaHome, FaShoppingCart, FaCalendarDay, FaSearch } from "react-icons/fa";
import { SlFeed } from "react-icons/sl";
import './Navbar.css';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sideNavbar">
            <div className="button-container-back">
                <FaPiedPiperAlt className="button-icon-back" />
                <p className="button-name-back">piedpiper</p>
            </div>

            <div className="search-bar-container">
                <FaSearch className="search-icon" />
                <input
                    className="search-bar"
                    placeholder="Explore PipedPiper..."
                ></input>
            </div>

            <Link className="button-container" href="/">
                <FaHome className="button-icon" />
                <p className="button-name">Home</p>
            </Link>

            <div className="button-container">
                <FaShoppingCart className="button-icon" />
                <p className="button-name">Market Place</p>
            </div>

            <div className="button-container">
                <FaCalendarDay className="button-icon" />
                <p className="button-name">Event</p>
            </div>

            <div className="button-container">
                <SlFeed className="button-icon" />
                <p className="button-name">Feed</p>
            </div>
        </nav>
    );
}
