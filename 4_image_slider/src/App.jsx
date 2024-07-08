import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './App.css';

function App() {
  const url = "https://picsum.photos/v2/list";
  const limit = 10;
  const page = 1;

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoadingState(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoadingState(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoadingState(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loadingState) {
    return <div>Loading_DATA..., Please Wait a while</div>;
  }

  if (errorMsg) {
    return <div>Error occurred: {errorMsg}</div>;
  }

  return (
    <>
    <div className='wrapper'>

      <h2 className='head'>Image Slider</h2>


    <div className='container'>
        <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
        {
          images && images.length ?
            images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
              />
            ))
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        <span className='circle-indicators'>
          {
            images && images.length ?
              images.map((_, index) => (
                <span key={index} className={
                  currentSlide === index ?
                    "current-indicator" :
                    "current-indicator inactive-indicator"
                }
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))
              : null
          }
        </span>
      </div>


    </div>
    </>
  );
}

export default App;
