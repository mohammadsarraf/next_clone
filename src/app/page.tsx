import Image from 'next/image'
import Navbar from './Components/Navbar'
import ComposerBox from './Components/ComposerBox';

export default function Home() {
  return (
   <div className='App'>
      <Navbar />
      <ComposerBox /> {/* Add the ComposerBox component here */}
    </div>
  )
}
