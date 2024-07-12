import { useRef, useState } from 'react'
import './App.css'
import useFetch from './useFetchHook/index'
import ScrollToTopAndBottom from './components/ScrollToTopAndBottom'
import ScrollToSections from './components/ScrollToSections'

function App() {
 
  const [showSections, setShowSections] = useState(false)


  return (
    <>
    
    <div className='wrapper'>

      <nav className='navbar'>
        <div className={`btn ${showSections === false ? 'active': ''}`} onClick={()=>{setShowSections(false)}}>Scroll To top and Bottom Tab</div>
        <div className={`btn ${showSections === true ? 'active': ''}`} onClick={()=>{setShowSections(true)}}>Scroll To Sections Tab</div>
      </nav>
    
    {
      showSections ? 
      (
    <div>
        <ScrollToSections/>
    </div>
      )
      :
      (
        <ScrollToTopAndBottom />
      )
   
    }

    </div>
    
        </>
  )
}

export default App
