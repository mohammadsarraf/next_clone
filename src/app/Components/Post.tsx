'use client';

import './Post.css';
import { FaArrowUp, FaArrowDown, FaReply, FaUserAlt, FaThumbsUp, FaComment, FaShare, FaEllipsisV, FaUser, FaImage, FaSmile, FaMapMarkerAlt, } from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
    username: string;
    content: string;
    timestamp: string;
}

const Post: React.FC<Props> = ({ username, content, timestamp }) => {
    const [isExpanded, setIsExpanded] = useState(true)
    
    const handleIsEpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        // (true ? (
            <>
                <div className=" flex flex-col w-fit border rounded-xl p-3 bg-blue-900 bg-opacity-20 box-border">
                    <div className="flex items-center">
                        <div className='w-16 h-16 bg-white rounded-full mr-3'>{/* <FaUserAlt /> */}</div>
                        <div className='user-info'>
                            <div className='ml-1 font-bold'>{username}</div>
                            <div className='ml-1'>{timestamp}</div>
                        </div>
                        <div className='w-5 h-5 bg-transparent'>
                            <FaEllipsisV />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className="h-20 mb-3">{content}</p>
                        {/* <div className='content-picture'>
                            <Image src='/picture.png' alt='Post content' width={300} height={200} />
                        </div> */}
                    </div>
                    <div className="flex justify-between">
                        <button className='flex items-center bg-transparent border-transparent p-1 rounded text-white transition-colors'>
                            <div className='mr-2'>
                                <FaThumbsUp />
                            </div>
                            <div className='mr-3'>Like</div>
                            <div className='px-3 rounded-r-full rounded-l-full bg-gray-900 bg-opacity-30 '>200+</div>
                        </button>

                        <button className='flex items-center bg-transparent border-transparent p-1 rounded text-white transition-colors' onClick={handleIsEpanded}>
                            <div className='mr-2'>
                                <FaComment />
                            </div>
                            <div className='mr-3'>Comment</div>
                            <div className='px-3 rounded-r-full rounded-l-full bg-gray-900 bg-opacity-30 '>200+</div>
                        </button>

                        <button className='flex items-center bg-transparent border-transparent p-1 rounded text-white transition-colors'>
                            <div className='mr-2'>
                                <FaShare />
                            </div>
                            <div className='mr-3'>Share</div>
                            <div className='px-3 rounded-r-full rounded-l-full bg-gray-900 bg-opacity-30 '>200+</div>
                        </button>
                    </div>
                </div>
            </>
        // ) : (
        //     <>
        //         <div className=" flex flex-col w-fit ml-10 border rounded-xl p-3 bg-blue-900 bg-opacity-20 box-border">
        //             <div className="flex items-center">
        //                 <div className='w-16 h-16 bg-white rounded-full mr-3'>{/* <FaUserAlt /> */}</div>
        //                 <div className='user-info'>
        //                     <div className='ml-1 font-bold'>{username}</div>
        //                     <div className='ml-1'>{timestamp}</div>
        //                 </div>
        //                 <div className='w-5 h-5 bg-transparent'>
        //                     <FaEllipsisV />
        //                 </div>
        //             </div>
        //             <div className='mt-3'>
        //                 <p className="h-20 mb-3">{content}</p>
        //                 {/* <div className='content-picture'>
        //                     <Image src='/picture.png' alt='Post content' width={300} height={200} />
        //                 </div> */}
        //             </div>
        //             <div className="flex justify-between">
        //                 <button className='flex items-center bg-transparent border-transparent p-1 rounded text-white transition-colors hover:text-blue-400'>
        //                     <div className='mr-2'>
        //                         <FaThumbsUp />
        //                     </div>
        //                     <div className='mr-3'>Like</div>
        //                     <div className='px-3 rounded-r-full rounded-l-full bg-blue-800 bg-opacity-30'>200+</div>
        //                 </button>

        //                 <button className='flex items-center bg-transparent border-transparent p-1 rounded text-white transition-colors hover:text-blue-400' onClick={handleIsEpanded}>
        //                     <div className='mr-2'>
        //                         <FaComment />
        //                     </div>
        //                     <div className='mr-3'>Comment</div>
        //                     <div className='px-3 rounded-r-full rounded-l-full bg-blue-800 bg-opacity-30'>200+</div>
        //                 </button>

        //                 <button className='flex items-center bg-transparent border-transparent p-1 rounded text-white transition-colors hover:text-blue-400'>
        //                     <div className='mr-2'>
        //                         <FaShare />
        //                     </div>
        //                     <div className='mr-3'>Share</div>
        //                     <div className='px-3 rounded-r-full rounded-l-full bg-blue-800 bg-opacity-30'>200+</div>
        //                 </button>
        //             </div>
        //         </div>
        //         <div className='w-fit ml-10'>
        //             <div className='comment-top-bar'>
        //                 <FaUser className='comment-user-icon' />
        //                 <input type='text' className='comment-input-bar' placeholder='Reply...' />
        //                 <div className='comment-icons'>
        //                     <FaImage className='icon' />
        //                     <FaSmile className='icon' />
        //                     <FaMapMarkerAlt className='icon' />
        //                 </div>
        //             </div>

        //             <div className='comment-section'>
        //                 <div className='sort-section'>
        //                     <div className='filter-comment'>All comments</div>
        //                     <div className='sort-comment'>
        //                         <div className='sort-name'>Sort by:</div>
        //                         <div className='sort-options'>Most Popular</div>
        //                     </div>
        //                 </div>
        //                 <div className='comment'>
        //                     <div className='profile-picture-comment'></div>
        //                     <div className='user-comment'>
        //                         John Doe: This is the text content of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                     </div>
        //                 </div>
        //                 <div className='interact-comment'>
        //                     <div className='reply'>
        //                         <FaReply className='reply-icon' />
        //                         <p className='reply-icon-name'>Reply</p>
        //                     </div>
        //                     <div className='comment-buttons'>
        //                         <button className='comment-upvote'>
        //                             <FaArrowUp className='upvote-icon' />
        //                             Upvote
        //                         </button>
        //                         <span className='separator'>|</span>
        //                         <button className='comment-downvote'>
        //                             <FaArrowDown className='downvote-icon' />
        //                             Downvote
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </>
        // ))
    );
}

export default Post;