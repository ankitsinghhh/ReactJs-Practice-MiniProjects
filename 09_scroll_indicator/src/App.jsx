import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let url = "https://dummyjson.com/products?limit=140"
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [scrollpercentage, setScrollPercentage] = useState(0)

  async function fetchData(getUrl) {
    try {
      setLoading(true)
      const resposne = await fetch(getUrl)
      const data = await resposne.json()
      console.log(data)

      if (data && data.products && data.products.length > 0) {
        setData(data.products)
        setLoading(false)
      }



    }
    catch (error) {
      console.log('Error:', error)
      setErrorMsg(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])


  function handleScrollPercentage() {
    // Get the number of pixels that the document has already been scrolled vertically from the top of the <body> element.
    // This value is often 0 in modern browsers when using the HTML5 doctype.
    const BodyTop = document.body.scrollTop;

    // Get the number of pixels that the document has already been scrolled vertically from the top of the <html> element.
    // This is the most commonly used property for getting the vertical scroll position in modern browsers.
    const ElementTop = document.documentElement.scrollTop;

    // Get the total height of the document, including the height of the content that is not currently visible in the viewport due to scrolling.
    const TotalHeight = document.documentElement.scrollHeight;

    // Get the height of the visible part of the document (the viewport).
    // This is the height of the content that is currently visible to the user, not including any parts of the content that are outside the viewport due to scrolling.
    const clientHt = document.documentElement.clientHeight;

    // Calculate the scroll percentage by dividing the current scroll position (ElementTop) by the total scrollable height (TotalHeight - clientHt) and multiplying by 100.
    const howMuchScrolled = (ElementTop / (TotalHeight - clientHt)) * 100;

    // Set the scroll percentage value to the state or a variable to use it elsewhere in the code.
    // Assuming setScrollPercentage is a function that updates the state or a variable with the new scroll percentage value.
    setScrollPercentage(howMuchScrolled)





    // console.log(BodyTop, ElementTop, TotalHeight, clientHt)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage)

    return () => {
      window.removeEventListener('scroll', handleScrollPercentage)
    }
  }, [])

  console.log(data, loading)

  if (loading == true) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    )
  }

  console.log(scrollpercentage)


  return (
    <>
      <div className="wrapper">

        <div className="container">


          <div className="navbar">
            <h1>Custom Scroll indicator</h1>

            <div className="scroll-progress-container">
              <div className='current-progress' style={{ width: `${scrollpercentage}%` }}>

              </div>
            </div>
          </div>

          <div className='data-container'>
            {
              data && data.length > 0 ?
                (
                  data.map(dataItem => (
                    <div key={dataItem.id} className='data-item'>
                      <p>{dataItem.title}</p>
                      <img src={dataItem.thumbnail} alt={dataItem.title} />
                    </div>
                  ))
                )
                : (null)
            }
          </div>
        </div>


      </div>
    </>
  )
}

export default App
