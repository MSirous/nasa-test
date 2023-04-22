import { getImages } from "../api/nasa";
import { useEffect, useState } from "react";
import Image from "./image";
import Search from "./Search";

const Grid = () => {
    const [search, setSearch] = useState("");
    const [images, setImages] =  useState([]);
    useEffect(()=>{
        const getData = async()=>{
            const images = await getImages(search);
            setImages(images);
            
        }
        getData();
    }, [search])
    console.log("images", images)
    return <div >
        <Search search={search} setSearch={setSearch} />
    <div style = {{display: "flex",  flexWrap: "wrap"}}> 
        {images.map(image => <Image image={image}/>)
}
    </div>
    </div>

    
}
export default Grid;