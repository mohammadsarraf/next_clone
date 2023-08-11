import './MainContent.css'
import ComposerBox  from './ComposerBox'
import Post from './Post';

const content = `Well, this is interesting. #BaldursGate3 uses "Point & Click" movement on PC with a M&K. Which made me curious how that would even work on Consoles.I decided to test it with my controller and out it turns out the movement system completely changes while using a controller.`
    
export default function MainContent(porps: any) {
    return(
        <div className='main-content'>
            <ComposerBox username={`Moe`}/>
            <Post username={`John Doe`} content={content}/>

        </div>
    )
}