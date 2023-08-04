import Image from 'next/image'
import Navbar from './Components/Navbar'
import ComposerBox from './Components/ComposerBox';
import AppNavabr from './Components/AppNavbar';

export default function Home() {
  return (
   <div className='App'>
      <Navbar />
      <AppNavabr />
      <ComposerBox /> {/* Add the ComposerBox component here */}
    </div>
  )
}
