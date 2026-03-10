import { useState } from 'react'
import './index.css'
import PhoneFrame from './components/PhoneFrame'
import LockScreen from './components/LockScreen'
import HomeScreen from './components/HomeScreen'
import Photos from './apps/Photos'
import Notes from './apps/Notes'
import Contacts from './apps/Contacts'
import Projects from './apps/Projects'
import Experience from './apps/Experience'
import Research from './apps/Research'
import Awards from './apps/Awards'
import Music from './apps/Music'

function App() {
  const [isLocked, setIsLocked] = useState(true)
  const [openApp, setOpenApp] = useState(null)

  const handleUnlock = () => setIsLocked(false)
  const handleAppOpen = (appId) => setOpenApp(appId)
  const handleAppClose = () => setOpenApp(null)

  return (
    <PhoneFrame>
      {/* Lock Screen */}
      {isLocked && <LockScreen onUnlock={handleUnlock} />}

      {/* Home Screen */}
      {!isLocked && <HomeScreen onAppOpen={handleAppOpen} />}

      {/* Apps */}
      <Photos isOpen={openApp === 'photos'} onClose={handleAppClose} />
      <Notes isOpen={openApp === 'notes'} onClose={handleAppClose} />
      <Contacts isOpen={openApp === 'contacts'} onClose={handleAppClose} />
      <Projects isOpen={openApp === 'projects'} onClose={handleAppClose} />
      <Experience isOpen={openApp === 'experience'} onClose={handleAppClose} />
      <Research isOpen={openApp === 'research'} onClose={handleAppClose} />
      <Awards isOpen={openApp === 'awards'} onClose={handleAppClose} />
      <Music isOpen={openApp === 'music'} onClose={handleAppClose} />
    </PhoneFrame>
  )
}

export default App
