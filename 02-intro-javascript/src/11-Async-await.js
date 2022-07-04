
const getImagen = async() =>{

    try{
    
    const apiKey = 'iBz2K0xcUJFwh4PAoT6FcIB5jhQovIc9'
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    const {data} = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement ('img');
    img.src = url;
    document.body.append(img);

}

    catch(error){
        
    }
}

getImagen();

 



