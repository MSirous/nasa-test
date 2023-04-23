const url = 'https://images-api.nasa.gov/search?q='

const  getImages = async(search, showImage, showVideo)=>{
    let params = '';
    if (showImage && !showVideo){
        params += "&media_type=image"
        }
        else if (!showImage && showVideo){
            params += "&media_type=video"
        }
        const response = await fetch(url + `${search}` + params);
    const data = await response.json();
    const items=  data.collection.items;
    console.log(items);
    if (items.length >0) {
        return  items;
    }
    return []
}

const getImage = async(id) => {
    const imageUrl = `https://images-assets.nasa.gov/image/${id}/collection.json`;
    const response = await fetch (imageUrl);
    const data = await response.json();
    console.log(data);
    return data;
}

export {getImages, getImage};

