import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from './Carousel';

function App() {
  
  const [num, setNum] = useState(1);
  const[photos,setPhotos] = useState(null);
  useEffect(() => {
    async function getArray() {
      const photos = await axios
        .get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=5")
        .then(response => response.data.photos);
       
       
      setPhotos(photos);
      setNum(3);
    }
    getArray();
  }, []);

  return (
    <div
      className='flex justify-center items-center h-screen'
    >
      <Carousel  number={num} photos={photos} />


    </div>
  )
}

export default App