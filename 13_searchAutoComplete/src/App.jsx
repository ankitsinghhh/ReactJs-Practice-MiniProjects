import { useState,useEffect } from 'react'
import Suggestions from './components/Suggestions.jsx'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [loading ,setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  function handleChange(event){
    const query = event.target.value.toLowerCase()
    setSearchTerm(query)
    if(query.length>1){
      const filteredData = users && users.length ? 
      users.filter(username => username.toLowerCase().indexOf(query)>-1) : [];

      setFilteredUsers(filteredData)
      setShowDropdown(true)
    }
    else{
      setShowDropdown(false)
      setFilteredUsers([])

    }
  }

  function handleClick(event){
    console.log(event.target.innerText)
    const clickedTerm = event.target.innerText
    setSearchTerm(clickedTerm)
    setShowDropdown(false)
    setFilteredUsers([])

  }

  async function fetchListUsers(){
    try{
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users?limit=50')
      const data = await response.json()
      // console.log(data)
      if(data && data.users && data.users.length){
        setUsers(data.users.map(userItem => userItem.firstName))
        setLoading(false)
        setError(null)
      }
    }
    catch(error){
      setLoading(false)
      console.log(error)
      setError(error)
      
    }
  }


  useEffect(() => {
    fetchListUsers()
  },[])

  console.log(users,filteredUsers)

  return (
    <>
    <div className="wrapper">

<div className="search-autocomplete-container">
  {
    loading ? 
    <h1>Loading Data! please wait.....</h1>
    :
    <input
    name='search-users'
    placeholder='Search Users here...'
    value={searchTerm}
    onChange={handleChange}
    />
  }
 
  {
    showDropdown && filteredUsers.length > 0 && (
      <Suggestions handleClick={handleClick} data={filteredUsers} />
    )
  }
</div>


    </div>
    </>
  )
}

export default App
