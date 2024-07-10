import { useState } from 'react'

import './App.css'
import Modal from './components/Modal'


function App() {

  const [showModal,setShowModal] = useState(false)

  const handleToggleShowModal = () => {
    setShowModal(!showModal)
    console.log("modal : ",showModal)
 
  }

  function onClose(){
    setShowModal(false)
  }


  return (
    <>
    <div className="wrapper">

      <button className='btn' onClick={()=>handleToggleShowModal()} >Open Modal Pop-Up</button>
      {
        showModal && <Modal onClose={onClose}  body={<div>Customized Body</div>}  
        header={<div>Customized Header</div>}
        footer={<div>Customized Footer</div>}
        />
      }
    </div>
    </>
  )
}

export default App
