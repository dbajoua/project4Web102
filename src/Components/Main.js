import React, { useState } from 'react';
import Gallery from './gallery';

const Main=()=>{
  const[imgUrl, setUrl] = useState("https://cdn2.thecatapi.com/images/bbl.jpg");

  const[catID, setID] = useState("");
  
  const[catHeight, setHeight] = useState("");
  
  let arrayOfImages = [];

  const [count, setCount] = useState(0)
  
  const [currentImage, setCurrentImage] = useState(null);

  const [prevImages, setPrevImages] = useState([]);
  
  const callImg=()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setUrl(data[0].url))
    .then(data=>setID(data[0].id))
    .then(data=>setHeight(data[0].height));


   setCurrentImage(imgUrl);
   setPrevImages((images) => [...images, imgUrl]);

   
 
    
   
  }
  return(
    <>

      <div className="container">
            <div className="box">
                <h2>Cat API !!!</h2>
                <br></br>
                <img src={imgUrl}></img>  
                <br></br>
                <button onClick={()=>callImg()}> Click for New Cat!</button>
                
                <button >{imgUrl} </button>
                <button > CatHeight:not specified {catHeight} </button>
                <button > CatID: not specified{catID} </button>
                  
            </div>

      </div>

      <div className="seenImages">
      <h2>Seen Cats Shown Here: </h2> 
      <Gallery images={prevImages} />
            
      
      </div>

      <div className='banList'>
        <h2>Banned Attributes:</h2>
            {imgUrl}
         
      </div>

    </>

      


    
  )
}

export default Main;
