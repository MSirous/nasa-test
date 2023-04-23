import {useParams} from 'react-router-dom';
import { getImage } from "../api/nasa";
import { useEffect, useState } from "react";



const ImageView = () => {
    const [images, setImages] =  useState([]);
    const { id } = useParams();

    useEffect(()=>{
        const getData = async()=>{
            const images = await getImage(id);
            setImages(images);
            
        }
        getData();
    }, [id])
    console.log("images", images)


    return <div style = {{display: "flex",  flexWrap: "wrap"}}> 
        {images.map(image => <img src={image}/>)
}
    </div>

}

export default ImageView;