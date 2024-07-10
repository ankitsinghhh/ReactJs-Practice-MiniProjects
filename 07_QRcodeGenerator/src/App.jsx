import { useState } from 'react'
import QRCode from "react-qr-code"
import './App.css'

function App() {
  const [qrValue, setQrValue] = useState('')
  const [input, setInput] = useState('')

  function handleGenerateQRCode() {
    setQrValue(input)
    setInput('')
  }

  return (
    <>
      <div className="wrapper">

      <div className="container">
      <h1 className='head'>QR Code Generator</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder='Enter your value here' />
       
      </div>
      <div>
      <button disabled={input && input.trim() !== "" ? false : true} onClick={() => handleGenerateQRCode()}>Generate QR Code</button>
      </div>
      <div>
        <QRCode
          id='qr-code--value'
          size={400}
          bgColor='white'
          value={qrValue}
        />
      </div>
      </div>

      </div>

    </>
  )
}

export default App
