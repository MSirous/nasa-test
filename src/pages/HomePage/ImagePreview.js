import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';

export default function ImagePreview({ nasaPicture, title,description }) {
  
  
  const [show, setShow] = useState(false);
  return (
    <main class="grid">
    <div class="responsive" >  
    <div class="gallery">
    <div class="desc">{title}</div>        
          <img src={nasaPicture} class="Img_Grid"onClick={() => setShow(true)}/>
          
    </div>
    </div>
    
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal"
       >
      
          <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
          </div>
          <img src={nasaPicture}/>
      </Modal>
  </main>
  );
}
