import React, { useState, useEffect } from 'react';
import * as fb from '../functions/Class';
import { FaUser, FaCamera, FaImage, FaPaperclip, FaLocationArrow, FaSmile, FaEdit } from 'react-icons/fa';


export default function ComposerBox(props: any) {
	const [content, setContent] = useState('');
	const [tweetsData, setTweetsData] = useState([]);
	const [shouldPost, setShouldPost] = useState(false);
	const db = fb.getDatabase();

	const adjustInputHeight = (textArea: any) => {
		textArea.style.height = 'auto';
		textArea.style.height = `${textArea.scrollHeight}px`;
	};

	const handleContent = (e: any) => {
		setContent(e.target.value);
	};

	const handlePostClick = async () => {
		await fb.handlePost(db, content, props.username, setTweetsData, tweetsData);
		setContent('');

	};


	return (
		<div className=" border border-gray-500 rounded-md bg-gray-900 bg-opacity-20 mb-10">
			<div className="flex items-center p-3">
				<FaUser className="w-12 h-12 rounded-full bg-white mr-3 text-white" />
				<input
					className='flex-1 h-10 p-3 border-gray-300 rounded-r-full rounded-l-full outline-none text-md bg-gray-600 bg-opacity-30 text-white'
					placeholder="What's on your mind?"
					value={content}
					onChange={handleContent}
				/>
			</div>
			<div className="flex justify-between p-3">
				<div className="flex p-3">
					<FaCamera className="m-2 my-0" />
					<FaImage className="m-2 my-0" />
					<FaPaperclip className="m-2 my-0" />
					<FaLocationArrow className="m-2 my-0" />
					<FaSmile className="m-2 my-0" />
				</div>
				<div className="flex items-center">
					<div className="flex items-center p-2 bg-transparent rounded-md mr-3">
						<FaEdit className="mr-2" />
						Draft
					</div>
					<button className="p-1 bg-gray-600 bg-opacity-20 text-white border-none rounded-xl cursor-pointer w-24 h-auto " onClick={handlePostClick}>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}