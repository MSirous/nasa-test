import { Link } from "react-router-dom";



const Image = ({image}) =>{
    if (image?.links?.length < 0){
        return;
    }
    console.log("image ", image)
    return <Link to={`/image/${image.data[0].nasa_id}`}>

<div className="image" >
            <img 
            style={{borderRadius: 5, margin:10, width: 200, height: 200}} 
            src={image?.links?.length > 0 &&
                image.links[0].href} />   
        </div>
        <div className="image-title">
            {image.data[0].title}
        </div>
    </Link>
    
}
export default Image;
