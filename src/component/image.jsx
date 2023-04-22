
const Image = ({image}) =>{
    if (image?.links?.length < 0){
        return;
    }
    return <div className="image" >
            <img 
            style={{borderRadius: 5, margin:10, width: 200, height: 200}} 
            src={image?.links?.length > 0 &&
                image.links[0].href} />   
        </div>
}
export default Image;
