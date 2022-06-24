import React from 'react'
import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getgifs';
import { GifItem } from './GifItem';
    
export const GifGrid = ({ enviarCategoria }) => {
  
    const { images, isLoading} = useFetchGifs( enviarCategoria )
   


  return (
    <>
      <h3>{enviarCategoria}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              //...image me da todas las propiedades
              // que tiene la image
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
