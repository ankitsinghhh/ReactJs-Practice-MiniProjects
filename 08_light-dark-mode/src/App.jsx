import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // Initialize theme from local storage or default to 'light'
  let initTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(initTheme)

  useEffect(() => {
    // Apply the initial theme on component mount
    applyTheme(theme)
  }, [])

  function applyTheme(currentTheme) {
    let btn = document.querySelector(".btn")
    let wrapper = document.querySelector(".wrapper")
    let text = document.querySelector(".text")

    if (currentTheme === 'light') {
      btn.classList.add("btn-light")
      wrapper.classList.add("wrapper-light")
      text.classList.add("text-light")
      btn.classList.remove("btn-dark")
      wrapper.classList.remove("wrapper-dark")
      text.classList.remove("text-dark")
    } else {
      btn.classList.add("btn-dark")
      wrapper.classList.add("wrapper-dark")
      text.classList.add("text-dark")
      btn.classList.remove("btn-light")
      wrapper.classList.remove("wrapper-light")
      text.classList.remove("text-light")
    }
  }

  function ThemeHandler() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return (
    <>
      <div className='wrapper'>
        <div className="container">
          <p className='text'> {theme.toUpperCase()} MODE </p>
          <button className='btn' onClick={ThemeHandler}>Change Theme</button>
        </div>
      </div>
    </>
  )
}

export default App
