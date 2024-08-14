//import React from 'react'
import { useState } from "react"



export const AddCategory = ({onNewCategory, currentCategories})  => {  //{setCategories}) => {
    //console.log(currentCategories)
    const [inputValue, setInputValue] = useState('')
    //const [categories, setNewCategories] = useState([setCategories])

    const onInputChange = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }


    const onSubmit = (event) => {    
        event.preventDefault();
        
        // if (inputValue.trim() != ''){
        //     setCategories ( categories => [
        //         inputValue, ...categories
        //     ])
        // }else{
        //     console.log('No se puede Insertar un valor Vacio')
        // }
        
        //      Ó

        //Con "return", se indica que si no se cumple la condición, se sale de la función
        if (inputValue.trim().length <= 1) return;
            // setCategories ( categories => [
            //     inputValue, ...categories
            // ])
            //console.log(currentCategories.includes( inputValue.trim() ))
            //if (currentCategories.includes( inputValue.trim() ) ) return;
                onNewCategory(inputValue.trim())
                setInputValue('')   //Se setea a vacio el valor de "inputValue"
    }


    return (
        <form onSubmit = { onSubmit }  >    {/*Ó  { (event) => onSubmit(event) }>*/}
            <input
                type='text'
                placeholder="Buscar Gift"
                value = {inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}
