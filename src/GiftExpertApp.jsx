import React from 'react'
import { useState, useEffect } from 'react';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
//Teniendo las exportaciones en el Archivo /components/index.js
import {AddCategory, GifGrid} from './components'


export const GiftExpertApp = () => {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState(['One Punch'])
  //const [categories, setCategories] = useState([])  //Forma 3 con Objetos
  console.log(categories)


  const onAddCategory = (newCategory) => {
    //Valorant
    //categories.push('Valorant') //push muta el array
    console.log(newCategory)
    
    /* *********** CON ESTE BLOQUE SE VALIDA CASE SENSITIVE ***********
    let include = false
    categories.map(category => {
      if (category.toLowerCase() == newCategory.toLowerCase()) {
        include = true
        console.log('Fue Igual'.toLowerCase())
        return;  
      }
    })

    if(include) return;
    console.log(include)
    */

    if (categories.includes(newCategory)) return;
    setCategories(
       [
    //     //categories.concat(category) //Forma 1
    //     //...categories,category        //Forma 2
    //     //...categories,{id: nextId, name: category}    //Forma 3 con Objetos
    //     //cat => [...cat, 'Valorant'] //Debe ser sin los [] que lo encierran en este bloque
          newCategory, ...categories   //Agrega al inicio
       ]
       )
  }

  return (
    <>
        {/* Titulo */}
        <h4>GiftExpertApp</h4>

        {/* Input */}
        {/* <input type='text'
          onChange={e => setCategory(e.target.value) } /> */}
        <AddCategory 
         // setCategories = {setCategories}
            onNewCategory = {event => onAddCategory(event)}
            currentCategories = { categories }
        />

          {/* Listado de Gif */}
        {/* <button
          onClick = { onAddCategory } >
            Agregar
        </button> */}

        {/*categories.map(category => {
          //return <li key={category.id}>{`${category.id} - ${category.name}`}</li>
          return <li key={category}> {category} </li>
        })*/}
        {
          categories.map( (category) => (
          // <div key = {category}>
          //   <h4>{category}</h4>
          //   <li>{category}</li>
          // </div>

            <GifGrid
              key = {category}
              category = {category} />
          ))
        }
          {/* {<li></li>} */}

            {/* Gif Item */}
    </>
  )
}



/* Un ejemplo de CGPT
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export function ExampleComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <p>Window width: {width}</p>
    </div>
  );
}

export default ExampleComponent;
*/






