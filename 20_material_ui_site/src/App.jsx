import { useState } from 'react'
import './App.css'
import Navbar from "./Layout/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Career from './Pages/Career'
import About from './Pages/About'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <div className="wrapper">
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='career' element={<Career/>} />
          <Route path="/about" element={<About/>} />
       </Routes>
    </BrowserRouter>

   </div>
    </>
  )
}

export default App
