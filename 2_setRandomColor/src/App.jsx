import { useState } from 'react'
import './App.css'

function App() {

  const [click,setClick] = useState(false)

  function randomHex(){
    setClick(false)
    let charNum = "0123456789abcdef"

    let color="#"
    for (let i=0; i<6; i++){
      let randomIndex = Math.floor(Math.random() * charNum.length)
      color = color + charNum.charAt(randomIndex)
    }
    console.log(color)
    return color;
  }

  function randomRGB(){
    setClick(true)
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    console.log(`rgb(${r},${g},${b})`)
    return `rgb(${r},${g},${b})`;
  }

  function changeBodyColor(color){
      document.body.style.backgroundColor =color
      document.querySelector('.colorname').innerText = color
      if( color.includes('#')){
        console.log("hex color h  ")
        document.querySelector('.colortype').innerText = "Hex Color"
      }
      else{
        console.log("rgb color h ")
        document.querySelector('.colortype').innerText = "RGB Color"
      }


  
  }

  

  return (
    <>
   <div className="container">
    
    <button onClick={()=>{changeBodyColor(randomHex())}}
    >Generate a Random HexColor</button>
    <button onClick={()=>{changeBodyColor(randomRGB())}}
    >Generate Random RGBcolor</button>

    <button onClick={click===false ? ( ()=> { changeBodyColor(randomHex())} ) : ( ()=> { changeBodyColor(randomRGB())}  ) }
    >generate random Color</button>
 
    <div className="wrapper">
    <p className='colortype'></p>
      <p className="colorname"></p>
    </div>
   </div>
    </>
  )
}

export default App
