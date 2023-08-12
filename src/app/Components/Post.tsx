'use client';

import './Post.css';
import {FaArrowUp,FaArrowDown,FaReply,FaUserAlt,FaThumbsUp,FaComment,FaShare,FaEllipsisV,FaUser,FaImage,FaSmile,FaMapMarkerAlt,} from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';

interface  Props{
    username: string;
    content: string;
}

const Post: React.FC<Props> = ({username, content}) =>{
    const [isExpanded, setIsExpanded] = useState(true)

    const handleIsEpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        (isExpanded ? (
            <>
                <div className='Post'>
                    <div className='info'>
                        <div className='profile-picture'>{/* <FaUserAlt /> */}</div>
                        <div className='user-info'>
                            <div className='profile-name'>{username}</div>
                            <div className='time-stamp'>12h ago</div>
                        </div>
                        <div className='options'>
                            <FaEllipsisV />
                        </div>
                    </div>
                    <div className='content'>
                        <p className='content-text'>{content}</p>
                        {/* <div className='content-picture'>
                            <Image src='/picture.png' alt='Post content' width={300} height={200} />
                        </div> */}
                    </div>
                    <div className='social-bar'>
                        <button className='social-button'>
                            <div className='social-icon'>
                                <FaThumbsUp />
                            </div>
                            <div className='social-name'>Like</div>
                            <div className='social-text'>200+</div>
                        </button>

                        <button className='social-button' onClick={handleIsEpanded}>
                            <div className='social-icon'>
                                <FaComment />
                            </div>
                            <div className='social-name'>Comment</div>
                            <div className='social-text'>200+</div>
                        </button>

                        <button className='social-button'>
                            <div className='social-icon'>
                                <FaShare />
                            </div>
                            <div className='social-name'>Share</div>
                            <div className='social-text'>200+</div>
                        </button>
                    </div>
                </div>
            </>
        ):(
            <>
                <div className='Post'>
                    <div className='info'>
                        <div className='profile-picture'>{/* <FaUserAlt /> */}</div>
                        <div className='user-info'>
                            <div className='profile-name'>{username}</div>
                            <div className='time-stamp'>12h ago</div>
                        </div>
                        <div className='options'>
                            <FaEllipsisV />
                        </div>
                    </div>
                    <div className='content'>
                        <p className='content-text'>{content}</p>
                        {/* <div className='content-picture'>
                            <Image src='/picture.png' alt='Post content' width={300} height={200} />
                        </div> */}
                    </div>
                    <div className='social-bar'>
                        <button className='social-button'>
                            <div className='social-icon'>
                                <FaThumbsUp />
                            </div>
                            <div className='social-name'>Like</div>
                            <div className='social-text'>200+</div>
                        </button>

                        <button className='social-button' onClick={handleIsEpanded}>
                            <div className='social-icon'>
                                <FaComment />
                            </div>
                            <div className='social-name'>Comment</div>
                            <div className='social-text'>200+</div>
                        </button>

                        <button className='social-button'>
                            <div className='social-icon'>
                                <FaShare />
                            </div>
                            <div className='social-name'>Share</div>
                            <div className='social-text'>200+</div>
                        </button>
                    </div>
                </div>
                <div className='post-comment'>
                    <div className='comment-top-bar'>
                        <FaUser className='comment-user-icon' />
                        <input type='text' className='comment-input-bar' placeholder='Reply...' />
                        <div className='comment-icons'>
                            <FaImage className='icon' />
                            <FaSmile className='icon' />
                            <FaMapMarkerAlt className='icon' />
                        </div>
                    </div>

                    <div className='comment-section'>
                        <div className='sort-section'>
                            <div className='filter-comment'>All comments</div>
                            <div className='sort-comment'>
                                <div className='sort-name'>Sort by:</div>
                                <div className='sort-options'>Most Popular</div>
                            </div>
                        </div>
                        <div className='comment'>
                            <div className='profile-picture-comment'></div>
                            <div className='user-comment'>
                                John Doe: This is the text content of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className='interact-comment'>
                            <div className='reply'>
                                <FaReply className='reply-icon' />
                                <p className='reply-icon-name'>Reply</p>
                            </div>
                            <div className='comment-buttons'>
                                <button className='comment-upvote'>
                                    <FaArrowUp className='upvote-icon' />
                                    Upvote
                                </button>
                                <span className='separator'>|</span>
                                <button className='comment-downvote'>
                                    <FaArrowDown className='downvote-icon' />
                                    Downvote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ))
    );
}

export default Post;