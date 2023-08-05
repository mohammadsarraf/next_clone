import './MainContent.css'
import ComposerBox  from './ComposerBox'
import Post from './Post';

export default function MainContent() {
    return(
        <div className='main-content'>
            <ComposerBox />
            <Post />
        </div>
    )
}