import React, { useState, useEffect } from 'react'
import '../App.css'


function Products() {
 const [url, setUrl]= useState ('')
 function fetch_data(){
  fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
    if(res.ok){
      return res.json();
    }
    throw new Error('Request Failed');
  },networkError=> console.log(networkError.message)
  ).then(jsonRes=>{
    setUrl(jsonRes[0].url)
  })
 }
 return (
  <div className='productsMain'>
    <img src={url} className= 'productsImg' />
    <button className='productsBtn' onClick={fetch_data}>Show Me Something Else</button>
  </div>
 )
}

export default Products


// useEffect(() => {
//     const delay = imageUrl ? 2000 : 0;
  
//     setTimeout(async () => {
//       try {
//         const res = await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await res.json();
//         setImageUrl(data.message);
//       } catch (e) {
//         console.error("Random Image!!!", e);
//       }
//     }, delay);
//   }, [imageUrl]);

  // export default Products