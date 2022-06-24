import {useState} from 'react'
import { AddCategory, GifGrid } from './components';
    
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Cuphead"]);
   
    const onAddCategory = (newCategory) => {
        //Con setCategories actualizo el valor de
        //categories.
        //Si la lista de categorías/juegos ya tiene
        //La categoría que escribí no me devuelve nada
        if (categories.includes(newCategory)) return;
        //Si en cambio no la tiene la añade
        setCategories([newCategory, ...categories]);
        //setCategories se actualizará con lo que}
        //me devuelva newCategory desde AddCategory
        //y las categorías anteriores

    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            // setCategories={setCategories}
            onNewCategory = {onAddCategory}    
            />

            {/* Listado de Gifs */}
            {
                categories.map(category => (
                    <GifGrid key={category}
                    enviarCategoria={category} />
                )
            )}
            
            {/* Gif Item */}
        </>
  )
}
// A onNewCategory le envío lo que está adentro de
// onAddCategory como propiedad

// Map() permite barrer cada elemento del arreglo y
// regresar algo nuevo (se usa con una función) y en
// este caso regresa un elemento de la lista
// perteneciente a lo que se quiera buscar

// Siempre que use li con map() debo retornar una key
// este valor que tendrá será igual a lo que buscamos
// puede repetirse pero es un problema que solucionaremos
// luego

//EJEMPLO DE USESTATE
// const [state, setState] = useState(initialState);
// Devuelve un valor con estado y una función para
// actualizarlo.
// Durante el renderizado inicial, el estado devuelto
// (state) es el mismo que el valor pasado como primer
// argumento(initialState).
// La función setState se usa para actualizar el estado.
// Acepta un nuevo valor de estado y sitúa en la cola
// una nueva renderización del componente.
// setState(newState);

// Al pulsar el botón se añade una nueva categoría a
// la lista