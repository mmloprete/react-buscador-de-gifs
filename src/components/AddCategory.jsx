import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    // Tomo el array que está dentro de onNewCategory
    // (Propiedad enviada)
    const [inputValue, setInputValue] = useState('');
    // Genero un hook (usestate que inicie vacío y se
    // actualize con el valor de setInputValue)
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    //Cambio el valor de setInputValue segun lo que
    //Se esté escribiendo en el input (todo esto
    //cuando se llama a onInputChange)
    const onSumbit = (event) => {
    //Cuando envío el formulario (dandole enter al input)
        event.preventDefault();

        //Si el largo de lo que escribo en el input
        //Es menor a 1 no me devuelve nada
        if (inputValue.trim().length < 1) return;
        //Sino, envío al array dentro de las propiedades
        //De AddCategory lo que escribo en
        //inputValue
        onNewCategory(inputValue.trim());
        // Y me vacía lo que puse en el input
        // (Cuando doy enter)
        setInputValue('');
    }
    return (
        <form onSubmit={onSumbit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
//El componente AddCategory me devuelve un formulario
//Con el input dentro con las siguientes especificaciones
//El value varía según lo que hayamos escrito
//Al escribir algo mas se guarda con onChange
//AddCategory me devuelve OnNewCategory con su valor
//Actualizado
