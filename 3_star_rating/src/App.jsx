import { useState } from 'react'

import './App.css'
import {FaStar} from "react-icons/fa"

function App() {
  let noofStars = 10

  const [rating ,setRating] = useState(0)
  const [hover, setHover ] = useState(0)

  function handleClick(getCurrentIndex) {

    console.log(getCurrentIndex)
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex){

    console.log(getCurrentIndex)
    setHover(getCurrentIndex)
  }

  function handleMouseLeave(){

    // console.log(getCurrentIndex)
    setHover(rating)
  }

  return (
    <>
  <div className='wrapper'>
    <p className='head'>Star Rating</p>
  <div className="star-rating">
 
 {
   [...Array(noofStars)].map((_,index)=>{
     index+=1;
     return <FaStar
     key={index}
     className={index<=( hover || rating ) ? 'active': 'inactive' }
     onClick={ () => handleClick(index) }
     onMouseEnter={ () => handleMouseEnter(index)}
     onMouseLeave={ () => handleMouseLeave()}
     size={40}


     /> 
   })
 }
</div>
  </div>
    </>
  )
}

export default App
