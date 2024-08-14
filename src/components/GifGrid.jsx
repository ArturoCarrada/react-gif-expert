//import React from 'react'
import React, {useState, useEffect} from "react"
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {getGifs} from '../helpers/getGifs'


export const GifGrid = ({category}) => {
  //const images = [1,2,3,4,5]
  //console.log(GifItem)
  let {images, isLoading} = useFetchGifs(category)

  console.log({images, isLoading})

  //const [images, setImages] = useState([])

  // useEffect(() => {
  //   getGifs(category).then(response => {
  //     setImages(response)
  //   })
  // }, [])
    //Ó
    
  // const getImages = async() => {
  //   const newImages = await getGifs(category)
  //   setImages(newImages)
  // }

  // useEffect(() => {
  //   getImages()
  //  }, [])
  

// useEffect( () => {
//   getGifs(category)
// }, [])
//getGifs(category)

    return (
    <>
        <h4>{category}</h4>
        {
          isLoading && ( <h2>Crgando...</h2> )
        }
        
        
        {/* images.map */}
        <div className="card-grid">
        {
          // images.map(({id, title, url}) => ( //Con DESESTRUCTURACION (se evita poner "image.id", etc)
          //   //image => (
          //   <li key = {id} style={{marginBottom: 50}}>
          //     <h4>{title}</h4>  
          //     <img src = {url} alt = {title} style = {{width: 100, height: 100, borderRadius:50}}/>
          //   </li> ))
          
          images.map((image) => (
            <GifItem
              key = {image.id}
              {...image}
            />
          ))
        }
        </div>
    </>
  )
}
