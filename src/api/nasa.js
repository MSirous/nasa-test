const url = 'https://images-api.nasa.gov/search?q='
const  getImages = async(search)=>{
    const response = await fetch(url + `${search}`);
    const data = await response.json();
    const items=  data.collection.items;
    console.log(items);
    if (items.length >0) {
        return  items;
    }
    return []
}

export {getImages};
