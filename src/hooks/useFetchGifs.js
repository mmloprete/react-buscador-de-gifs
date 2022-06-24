import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getgifs";
export const useFetchGifs = (enviarCategoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const getImages = async () => {
    const newImages = await getGifs(enviarCategoria);
      setImages(newImages);
      setIsLoading(false);
    }
      useEffect(() => {
        getImages();
      }, [ ])

    //UseEffect es un hook que me permite
    //Disparar una accion cuando quiera
    //Al dejar las llaves vacías solo se ejecuta
    //getGifs cuando se crea y construye el componente

    return {
      images: images,
      isLoading: isLoading
    }

}
