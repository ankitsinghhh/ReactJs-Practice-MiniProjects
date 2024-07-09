import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const scrollPositionRef = useRef(0);

  const url = "https://dummyjson.com/products";

  async function fetchProducts(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?limit=20&skip=${count === 0 ? 0 : count * 20}`);
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts(prevData => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(url);
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  const loadMoreProducts = () => {
    scrollPositionRef.current = window.scrollY;
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [loading, products]);

  if (loading) {
    return <div>Loading data..., Please wait a while</div>;
  }

  return (
    <>
      <div className="container">
        <nav>
        <h1 className='head'>Product Scroll - Load More Data</h1>
        <p>Current Items: {count === 0 ? 20 : (count + 1) * 20}</p>
        </nav>
        <div className='product-container'>
          {products && products.length ? products.map(item => (
            <div className='product' key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          )) : null}
        </div>
        <div className='button-container'>
          <button disabled={disableButton} onClick={loadMoreProducts}>Load More Products</button>
          {disableButton ? <div>You have reached 100 products</div> : null}
        
        </div>
      </div>
    </>
  );
}

export default App;
