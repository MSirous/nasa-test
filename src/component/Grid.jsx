import { getImages } from "../api/nasa";
import { useEffect, useState } from "react";
import Image from "./image";
import Search from "./Search";
import Select from "./Select";

const Grid = () => {
    const [search, setSearch] = useState("");
    const [images, setImages] =  useState([]);
    const [showImage, setShowImage] =  useState(true);
    const [showVideo, setShowVideo] =  useState(true);
    useEffect(()=>{
        const getData = async()=>{
            const images = await getImages(search, showImage, showVideo);
            setImages(images);
            
        }
        getData();
    }, [search, showImage, showVideo])
    console.log("images", images)
    return <div >
        <Search search={search} setSearch={setSearch} />
        <Select showImage={showImage} setShowImage={setShowImage} 
        showVideo={showVideo} setShowVideo={setShowVideo} />
        
    <div style = {{display: "flex",  flexWrap: "wrap"}}> 
        {images.map(image => <Image image={image}/>)
}
    </div>
    </div>

    
}
export default Grid;