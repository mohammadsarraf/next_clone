import './ComposerBox.css'
import { FaUser, FaCamera, FaImage, FaPaperclip, FaLocationArrow, FaSmile, FaEdit  } from 'react-icons/fa';

export default function ComposerBox() {
    return(
        <div className="box">
            <div className='top-bar'>
                <FaUser  className="user-icon" />
                <input type='text' className='input-bar' placeholder='Type something...'></input>
            </div>
            <div className='bot-bar'>
                <div className='left-div'>
                    {/*camera, image, attach, location, emoji  */}
                    <FaCamera className='actions' />
                    <FaImage className='actions' />
                    <FaPaperclip className='actions' />
                    <FaLocationArrow className='actions' />
                    <FaSmile className='actions' />
                </div>
                <div className='right-div'>
                    <div className='draft'>
                        <FaEdit className='draft-icon' />
                        Draft
                    </div>
                    <button className='post-button'>Post</button>
                </div>
            </div>
        </div>
    )
}