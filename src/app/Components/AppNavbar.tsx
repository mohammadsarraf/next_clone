import './AppNavbar.css';
import { FaHome, FaFonticons, FaUserAlt} from "react-icons/fa";

export default function AppNavbar() {
    return (
        <div className="app-navbar">
            <div className="right-side">
                <FaHome className="route-icon"/> Home
                <div className="feed-actions">
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                </div>
            </div>
            <div className="left-side">
                <div className='feed-dm'>
                    <FaFonticons className="direct-message"/>
                    <FaFonticons />
                </div>
                <div className="user-info">
                    <p className='username'>John Doe</p>
                    <FaUserAlt className="profile-picture"/>
                </div>
            </div>
        </div>
    );
}
