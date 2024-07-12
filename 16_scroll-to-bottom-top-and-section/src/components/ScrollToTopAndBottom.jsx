import { useRef, useState } from 'react'
import useFetch from '../useFetchHook/index'

function ScrollToTopAndBottom() {
  // const [count, setCount] = useState(0)
  
  const {data, error , isLoading} = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  )

  const bottomRef = useRef(null)

  function scrollToTopHandler(){
    window.scrollTo({top: 0,left:0, behavior:'smooth'})
  }

  function scrolltoBottomHandler(){
    // const scrollHeight = document.documentElement.scrollHeight
    // const clientHeight = document.documentElement.clientHeight
    // window.scrollTo({top: scrollHeight - clientHeight, behavior:'smooth'})
    bottomRef.current.scrollIntoView({ behavior:'smooth'})
  }
  
  if(error){
    return <h1>Error: {error}</h1>
  }

  if(isLoading){
    return <h1 style={{padding:'30px',height:'100vh',textAlign:'center'}}>Loading...</h1>
  }

  return (
    <>
    
    <div className='wrapper' style={{alignItems:'center'}}>
      <h1>Scroll to Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={scrolltoBottomHandler} >Scroll To Bottom</button>

      <ul>
        {
          data && data.products.length ? 
          (
            data.products.map(product => (
              <li key={product.id}>{product.title}</li>
            ))
          )
          :
          (null)
        }
      </ul>

      <button onClick={scrollToTopHandler} >Scroll To Top </button>
      <h3>This is the bottom of the page</h3>
      <div ref={bottomRef}></div>


    </div>
    
        </>
  )
}

export default ScrollToTopAndBottom
