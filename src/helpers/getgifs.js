 export const getGifs = async(enviarCategoria) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=OZF3QdF69P7SWDJtOZbQSgQS3fd9hUeN&q=${enviarCategoria}&limit=10`;
        const resp = await fetch(url);
        const { data = [] } = await resp.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
            
        }));
        return gifs;
}