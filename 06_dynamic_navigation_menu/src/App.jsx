import { useState } from 'react'
import menus from "./data"
import './App.css'
import MenuItem from './components/menu-item'
import MenuList from './components/menu-list'

// Tree view component / Menu Ui component / recursive navigation menu 
function App() {
 

  return (
    <>
    <div className="tree-view-container">

    <MenuList list={menus} />

    </div>

    </>
  )
}

export default App
