import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Navbar from "./components/layout/Navbar.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <BrowserRouter>

      <Navbar/>
      
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>


      </BrowserRouter>
     </div>
    </>
  )
}

export default App
