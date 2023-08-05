import Image from 'next/image'
import Navbar from './Components/Navbar'
import ComposerBox from './Components/ComposerBox';
import AppNavabr from './Components/AppNavbar';
import MainContent from './Components/MainContent';

export default function Home() {
  return (
   <div className='App'>
      <Navbar />
      <AppNavabr />
      <MainContent />
    </div>
  )
}
