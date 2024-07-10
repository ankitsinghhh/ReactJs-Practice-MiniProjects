import { useState, useEffect } from 'react'
import './App.css'
import Loader from "./components/loading"
import Card from './components/Card'
import { IoLocationSharp } from "react-icons/io5";


function App() {

  const [username, setUsername] = useState("ankitsinghhh")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const url = "https://api.github.com/users/"

  async function fetchGithubUserData() {
    try {
      setLoading(true)
      const res = await fetch(`${url}${username}`)
      const data = await res.json()
      console.log(data)
      if (data) {
        setUserData(data)
        setLoading(false)
        setUsername('')
      }
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  function handleSubmit() {
    fetchGithubUserData()
  }


  useEffect(() => {
    fetchGithubUserData()
  }, [])

  if (loading) {
    return <div>
      <Loader />
    </div>
  }

  return (
    <>
      <div className="wrapper">
        <div className="github-profile-container">
          <div className="input-wrapper">
            <input
              name="search-by-username"
              type='text'
              placeholder='search Github Username...'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <button onClick={handleSubmit} >Search</button>
          </div>
          {
            userData !== null ? <Card user={userData} /> : null
          }
        </div>

      </div>
    </>
  )
}

export default App
