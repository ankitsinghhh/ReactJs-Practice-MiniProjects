import React from 'react'
import { NavLink,Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-purple-400 px-8 py-3">
      
      <nav className="flex  items-center gap-10">
        
        <Link to="/" className="flex items-center gap-2 text-[20px] text-white font-mono">
        <img src="/logo.svg" alt="Logo"
        width={40}
        />
        <span>Divers Paradise</span>
        </Link>
       <div className="flex gap-6 items-center">
       <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
       </div>
      </nav>
      
      <div className="right-part">
        <button className='bg-slate-700 text-white bg-opacity-40 border px-4 py-2 rounded-lg  font-normal'>Add User</button>
      </div>

      </div>
    

  )
}

export default Navbar