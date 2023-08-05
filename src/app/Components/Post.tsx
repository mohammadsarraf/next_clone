import './Post.css';
import { FaUserAlt, FaThumbsUp, FaComment, FaShare, FaHamburger, FaUser, FaImage, FaSmile, FaMapMarkerAlt    } from 'react-icons/fa';
import Image from 'next/image';

export default function Post() {
    return(
        <div>
            <div className='Post'>
                <div className='info'>
                    <div className='profile-picture'>
                        {/* <FaUserAlt /> */}
                    </div>
                    <div className='user-info'>
                        <div className='profile-name'>John Doe</div>
                        <div className='time-stamp'>12h ago</div>
                    </div>
                    <div className='options'><FaHamburger /></div>
                </div>
                <div className='content'>
                    <p className='content-text'>
                        This is the text content of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {/* <div className='content-picture'>
                        <Image src="/picture.png" alt="Post content" width={300} height={200} />
                    </div> */}
                </div>
                <div className='social-bar'>
                    <button className='social-button-first'>
                        <div className='social-icon'>
                            <FaThumbsUp />
                        </div>
                        <div className='social-name'>
                            Like
                        </div>
                        <div className='social-text'>
                            200+
                        </div>
                    </button>

                    <button className='social-button-second'>
                        <div className='social-icon'>
                            <FaComment />
                        </div>
                        <div className='social-name'>
                            Comment
                        </div>
                        <div className='social-text'>
                            200+
                        </div>
                    </button>

                    <button className='social-button-third'>
                        <div className='social-icon'>
                            <FaShare />
                        </div>
                        <div className='social-name'>
                            Share
                        </div>
                        <div className='social-text'>
                            200+
                        </div>
                    </button>
                </div>
            </div>
                <div className='post-comment'>
                    <div className='comment-top-bar'>
                        <FaUser className="comment-user-icon" />
                        <input type='text' className='comment-input-bar' placeholder="What's on your mind?" />
                        <div className='comment-icons'>
                            <FaImage className="icon" />
                            <FaSmile className="icon" />
                            <FaMapMarkerAlt className="icon" />
                        </div>
                    </div>
                    <div className='comment-section'>
                    </div>
                </div>
        </div>
    );
}
