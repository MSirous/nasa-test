

const Select = (
    {
        showImage, setShowImage,
        showVideo, setShowVideo
    }
) => {
    return <div>
        <div>
    <input
      type="checkbox"
      name="image"
      checked={showImage}
        onChange={()=>{setShowImage(!showImage)}} />
    <label for="image">Image</label>
  </div>
  <div>
    <input
      type="checkbox"
      name="video"
      checked={showVideo}
onChange={()=>{setShowVideo(!showVideo)}}
       />
    <label for="video">Video</label>
  </div>

    </div>
}

export default Select;